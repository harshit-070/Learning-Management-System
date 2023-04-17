import mongoose from "mongoose";

if (!mongoose.models.Testimonial) {
  const testimonialSchema = new mongoose.Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      image_url: { type: String, required: true },
      name: { type: String, required: true },
      designation: { type: String, required: true },
      description: { type: String, required: true },
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );

  let Testimonial = mongoose.model("Testimonial", testimonialSchema);
}
let Testimonial = mongoose.model("Testimonial");
export default Testimonial;
