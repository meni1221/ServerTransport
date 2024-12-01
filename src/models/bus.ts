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
    model:{
      type:String,
      require:true
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
    // שמתי שלא חייב רק בשביל הבדיקה
    routeID: {
      type: String || Object,
      required: false,
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

export default mongoose.model<IBus>("Bos", busSchema);
