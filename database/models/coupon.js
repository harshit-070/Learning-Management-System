import mongoose from "mongoose";

if (!mongoose.models.Coupon) {
  const couponSchema = new mongoose.Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      code: {
        type: String,
        required: true,
      },
      discount: {
        type: Number,
        required: true,
      },
      exp_date: {
        type: Date,
        required: true,
      },
      status: {
        type: Boolean,
        required: true,
      },
      deleted_at: {
        type: Date,
      },
      active_for_full_site: {
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

  let Coupon = mongoose.model("Coupon", couponSchema);
}
let Coupon = mongoose.model("Coupon");
export default Coupon;
