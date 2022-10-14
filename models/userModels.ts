import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: [true, "Username already exists."],
    required: [true, "Username required."],
  },
  email: {
    type: String,
    required: [true, "Email required."],
    unique: [true, "Email is already used on different account."],
  },
  password: {
    type: String,
    required: [true, "Must submit a valid password."],
    minLength: [8, "Password must be at least 8 characters long."],
  },
  passwordConfirm: String,
  // //Will eventually do child referencing
  // purchaseHistory: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  joinedOn: {
    type: Date,
    default: Date.now(),
  },
});

const User = models.Users || model("Users", userSchema);

export default User;
