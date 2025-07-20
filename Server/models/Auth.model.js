import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assumes you have a separate User model
    required: true,
  },
  provider: {
    type: String,
    required: true, // e.g., 'google', 'github'
  },
  providerAccountId: {
    type: String,
    required: true, // the user's ID from the provider (e.g., Google profile.id)
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


authSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

const Auth = mongoose.model("Auth", authSchema);
export default Auth;
