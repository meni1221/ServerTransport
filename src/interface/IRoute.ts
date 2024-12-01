export interface IRoute extends Document {
  lineNumber: string;
  name: string;
  stations: [string];
  schedule: [object];
  departureTime: string;
  arrivalTime: string;
  station: string;
  createdAt: Date;
  updatedAd: Date;
}
