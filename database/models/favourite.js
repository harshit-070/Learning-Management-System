const mongoose = require("mongoose");
const { Schema } = mongoose;

if (!mongoose.models.Favourite) {
  const favouriteSchema = new Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      courseId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Course",
      },
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );

  let Favourite = mongoose.model("Favourite", favouriteSchema);
}
let Favourite = mongoose.model("Favourite");
module.exports = Favourite;
