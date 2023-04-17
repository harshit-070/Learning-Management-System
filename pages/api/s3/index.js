import User from "database/models/user";
import fs from "fs";
import S3 from "aws-sdk/clients/s3";
import { config } from "process";
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;

    default:
      res.status(405).json({
        message: `Method ${req.method} not allowed`,
      });
  }
}

const handleGet = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).sort({
      created_at: -1,
    });

    res.status(200).json({ students });
  } catch (e) {
    res.status(400).json({
      error_code: "get_students",
      message: e.message,
    });
  }
};

const s3Client = new S3({
  region: process.env.AWS_S3_REGION,
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});

export const getUploadSignedUrl = async (key, duration) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key,
    ContentType: "application/octet-stream",
    ACL: "private",
    Expires: duration,
    HttpMethod: "PUT",
  };
  const signedUrl = s3Client.getSignedUrl("putObject", params);
  return signedUrl;
};

export const uploadToS3 = async (file, fileName) => {
  const fileStream = fs.createReadStream(file.path);

  try {
    return s3Client
      .upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName, // Change this to your desired file name and extension
        Body: fileStream,
        ACL: "public-read",
      })
      .promise();
  } catch (error) {
    log.error(error);
    throw new ErrorHandler("Error while uploading the file in S3", 500);
  }
};

export const deleteFromS3 = async (path) => {
  try {
    await s3Client
      .deleteObject({
        Bucket: config.get("AWS.BUCKET.NAME"),
        Key: path,
      })
      .promise();
  } catch (error) {
    log.error(error);
    throw new ErrorHandler("Error while deleting the file in S3", 500);
  }
};
