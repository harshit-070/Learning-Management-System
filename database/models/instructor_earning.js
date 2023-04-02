import mongoose from "mongoose";

if (!mongoose.models.Instructor_Earning) {
  const instructorEarningSchema = new mongoose.Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      earnings: {
        type: Number,
        required: true,
      },
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
      status: {
        type: String,
        enum: ["due", "paid", "cancelled"],
        default: "due",
      },
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
  );

  let Instructor_Earning = mongoose.model(
    "Instructor_Earning",
    instructorEarningSchema
  );
}
let Instructor_Earning = mongoose.model("Instructor_Earning");

export default Instructor_Earning;
