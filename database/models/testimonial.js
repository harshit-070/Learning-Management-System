import mongoose from "mongoose";

if (!mongoose.models.Testimonial) {
  const testimonialSchema = new mongoose.Schema(
    {
      image_url: { type: String, required: true },
      name: { type: String, required: true },
      designation: { type: String, required: true },
      description: { type: String, required: true },
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

  testimonialSchema.virtual("id", function () {
    return this._id;
  });

  let Testimonial = mongoose.model("Testimonial", testimonialSchema);
}
let Testimonial = mongoose.model("Testimonial");
export default Testimonial;
