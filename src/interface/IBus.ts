export interface IBus extends Document {
  licensePlate: string;
  capacity: number;
  status: string;
  driverID: string | object;
  routelID: string | object;
  createdAt: Date;
  updatedAd: Date;
}
