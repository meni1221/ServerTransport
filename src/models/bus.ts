import mongoose, { Document, Schema } from "mongoose";
import { IBus } from "../interface/IBus";

const busSchema: Schema = new Schema(
  {
    licensePlate: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    capacity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    driverID: {
      type: String || Object,
      required: true,
    },
    routelID: {
      type: String || Object,
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

export default mongoose.model<IBus>("Bos", busSchema);
