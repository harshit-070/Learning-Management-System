import jwt from "jsonwebtoken";
import { Enrolment, Course, User } from "@/database/models";

export default async function handler(req, res) {
  if (!("authorization" in req.headers)) {
    return res.status(401).json({ message: "No autorization token" });
  }
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    default:
      res.status(405).json({
        message: `Method ${req.method} not allowed`,
      });
  }
}

const handleGetRequest = async (req, res) => {
  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const enrolments = await Enrolment.find({ userId: userId })
      .sort({ created_at: -1 })
      .populate({
        path: "course",
        select: "title slug duration lessons image access_time",
        populate: {
          path: "user",
          select: "first_name last_name",
        },
      });

    res.status(200).json({
      enrolments,
    });
  } catch (e) {
    res.status(400).json({
      error_code: "progress",
      message: e.message,
    });
  }
};
