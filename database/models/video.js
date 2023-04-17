import mongoose from "mongoose";
if (!mongoose.models.Video) {
  const videoSchema = new mongoose.Schema(
    {
      group_name: { type: String },
      title: { type: String },
      thumb: { type: String },
      video: { type: String },
      video_length: { type: Number },
      is_preview: { type: Boolean },
      short_id: { type: Number },
      assets_zip: { type: String },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
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

  let Video = mongoose.model("Video", videoSchema);
}
let Video = mongoose.model("Video");
export default Video;
