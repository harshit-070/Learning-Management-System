import { Course, User, Category, Video } from "database/models";

export default async function handler(req, res) {
  if (!("authorization" in req.headers)) {
    return res.status(401).json({ message: "No autorization token" });
  }
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "PUT":
      await handlePut(req, res);
      break;
    default:
      res.status(405).json({
        message: `Method ${req.method} not allowed`,
      });
  }
}

const handleGet = async (req, res) => {
  try {
    const courses = await Course.find({ approved: false })
      .sort({ created_at: -1 })
      .populate("user", ["first_name", "last_name", "profile_photo"])
      .populate("category", ["name", "slug"])
      .populate("videos", ["title"]);

    res.status(200).json({ courses });
  } catch (e) {
    res.status(400).json({
      error_code: "get_courses_for_approve",
      message: e.message,
    });
  }
};

const handlePut = async (req, res) => {
  try {
    const { courseId, approved } = req.body;
    // console.log(courseId);

    if (approved) {
      await Course.findByIdAndUpdate(courseId, { approved: true });

      res.status(200).json({ message: "Published course" });
    } else {
      const course = await Course.findByIdAndDelete(courseId);
      res.status(200).json({ message: "Course Deleted" });
    }
  } catch (e) {
    res.status(400).json({
      error_code: "approve_courses",
      message: e.message,
    });
  }
};
