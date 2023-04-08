import mongoose from "mongoose";

if (!mongoose.models.Course_Asset) {
  const courseAssetSchema = new mongoose.Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      lecture_name: String,
      lecture_file: String,
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );

  let Course_Asset = mongoose.model("Course_Asset", courseAssetSchema);
}
let Course_Asset = mongoose.model("Course_Asset");
export default Course_Asset;
