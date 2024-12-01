import mongoose, { Document, Schema } from "mongoose";
import { ISchedule } from "../interface/ISchedule";

const ScheduleSchema: Schema = new Schema(
  {
    departureTime: {
      type: String,
      required: true,
    },
    arrivalTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISchedule>("Schedule", ScheduleSchema);
