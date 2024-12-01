import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../interface/IUser";

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },
    role: {
      type: String,
      required: true,
      enum:["admin","driver","passenger"]
    },
    createdAt: {
      type: Date,
      required: false,
    },
    updatedAd: {
      type: Date,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

// מסתיר את הסיסמה כשמחזירים את המשתמש
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

export default mongoose.model<IUser>("User", userSchema);
