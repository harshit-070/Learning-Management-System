import mongoose from "mongoose";

if (!mongoose.models.Subscription) {
  const subscriptionSchema = new mongoose.Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      active: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );
  let Subscription = mongoose.model("Subscription", subscriptionSchema);
}
let Subscription = mongoose.model("Subscription");
export default Subscription;
