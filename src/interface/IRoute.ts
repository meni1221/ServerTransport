import { ISchedule } from "./ISchedule";

export interface IRoute extends Document {
  lineNumber: string;
  name: string;
  stations: [string];
  schedule: [ISchedule];
  station: string;
  createdAt: Date;
  updatedAd: Date;
}
