import mongoose from "mongoose";

if (!mongoose.models.User) {
  const userSchema = new mongoose.Schema(
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        alias: "_id",
      },
      first_name: { type: String },
      last_name: { type: String },
      email: { type: String },
      password: { type: String },
      gender: { type: String },
      designation: { type: String },
      bio: { type: String },
      profile_photo: { type: String },
      location: { type: String },
      phone: { type: String },
      reset_password_token: { type: String },
      reset_password_send_at: { type: Date },
      reset_password_at: { type: Date },
      website: { type: String },
      twitter: { type: String },
      facebook: { type: String },
      linkedin: { type: String },
      youtube: { type: String },
      role: {
        type: String,
        enum: ["student", "admin", "instructor"],
        default: "student",
      },
      email_confirmed: { type: Boolean, default: false },
      email_confirmed_at: { type: Date },
      instructor_request: { type: Boolean, default: false },
      instructor_request_confirmed: { type: Boolean, default: false },
      instructor_request_confirmed_at: { type: Date },
      instructor_status: { type: Boolean, default: false },
      instructor_subject: { type: String },
      instructor_description: { type: String },
      status: { type: Boolean, default: false },
      is_profile_public: { type: Boolean },
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
  );

  let User = mongoose.model("User", userSchema);
}
let User = mongoose.model("User");

export default User;
