import mongoose from "mongoose";

if (!mongoose.models.Category) {
  const categorySchema = new mongoose.Schema(
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
      slug: {
        type: String,
        required: true,
        unique: true,
      },
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );

  let Category = mongoose.model("Category", categorySchema);
}
let Category = mongoose.model("Category");

export default Category;
