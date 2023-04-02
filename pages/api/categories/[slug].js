import { Category } from "database/models";

export default async function handler(req, res) {
  const { slug } = req.query;
  try {
    const category = await Category.findOne({ slug }).populate({
      path: "courses",
      populate: [
        {
          path: "user",
          select: "first_name last_name profile_photo",
        },
        {
          path: "enrolments",
          select: "_id",
        },
      ],
    });

    res.status(200).json({ courses });
  } catch (e) {
    res.status(400).json({
      error_code: "get_category_by_id",
      message: e.message,
    });
  }
}
