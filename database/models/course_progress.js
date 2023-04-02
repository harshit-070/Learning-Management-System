import mongoose from "mongoose";

const { Schema } = mongoose;

if (!mongoose.models.Course_Progress) {
  const courseProgressSchema = new Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      finished: Boolean,
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
      videoId: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true,
      },
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );

  let Course_Progress = mongoose.model("Course_Progress", courseProgressSchema);
}
let Course_Progress = mongoose.model("Course_Progress");
export default Course_Progress;
