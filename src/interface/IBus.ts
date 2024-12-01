export interface IBus extends Document {
  licensePlate: string;
  model: string;
  capacity: number;
  status: string;
  driverID: string | object;
  routeID: string | object;
  createdAt: Date;
  updatedAd: Date;
}
