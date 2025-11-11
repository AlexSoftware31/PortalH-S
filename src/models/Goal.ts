import mongoose, { Schema, Document } from "mongoose";

export interface IGoal extends Document {
  email: string;
  curso: string;
  temporal: string;
  alcance: string;
}

const GoalSchema = new Schema<IGoal>({
  email: { type: String, required: true },
  curso: { type: String, required: true },
  temporal: { type: String, required: true },
  alcance: { type: String, required: true }
});

export default mongoose.models.Goal || mongoose.model<IGoal>("Goal", GoalSchema);
