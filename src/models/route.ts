import mongoose, { Document, Schema } from "mongoose";
import { IRoute } from "../interface/IRoute";
import ScheduleSchema from "../models/schedule"

const RouteSchema: Schema = new Schema(
  {
    lineNumber: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    stations: {
      type: [String],
      required: true,
    },
    schedule: {
      type: [ScheduleSchema],
      required: true,
    },
    station: {
      type: String ,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAd: {
      type: Date,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model<IRoute>("Route", RouteSchema);
