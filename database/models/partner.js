import mongoose from "mongoose";

if (!mongoose.models.Partner) {
  const partnerSchema = new mongoose.Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      name: {
        type: String,
        required: true,
      },
      partner_image: {
        type: String,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );

  let Partner = mongoose.model("Partner", partnerSchema);
}
let Partner = mongoose.model("Partner");
export default Partner;
