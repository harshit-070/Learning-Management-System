import mongoose from "mongoose";
const { Schema } = mongoose;

if (!mongoose.models.Course) {
  const CourseSchema = new Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      title: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      short_desc: {
        type: String,
        required: true,
      },
      overview: {
        type: String,
        required: true,
      },
      latest_price: {
        type: Number,
        required: true,
      },
      before_price: {
        type: Number,
        required: true,
      },
      lessons: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      access_time: {
        type: String,
        enum: ["Lifetime", "Three Months", "Six Months", "1 Year"],
        default: "Lifetime",
      },
      requirements: {
        type: String,
        required: true,
      },
      what_you_will_learn: {
        type: String,
        required: true,
      },
      who_is_this_course_for: {
        type: String,
        required: true,
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
      approved: {
        type: Boolean,
        required: true,
      },
      in_home_page: {
        type: Boolean,
        required: true,
      },
      in_home_page_set_at: {
        type: Date,
        required: false,
      },
      is_class: {
        type: Boolean,
        required: true,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );

  let Course = mongoose.model("Course", CourseSchema);
}
let Course = mongoose.model("Course");
export default Course;
