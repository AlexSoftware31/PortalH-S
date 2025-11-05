import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name?: string;
  email: string;
  password: string;
  plan?: string;
}

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: String,
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
