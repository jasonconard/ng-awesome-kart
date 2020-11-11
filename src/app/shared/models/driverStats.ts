export class DriverStats {
  speed: number;
  acceleration: number;
  weight: number;
  handling: number;
  traction: number;
  luck: number;
  width: number;

  constructor(o: Partial<DriverStats>) {
    this.speed = o.speed;
    this.acceleration = o.acceleration;
    this.weight = o.weight;
    this.handling = o.handling;
    this.traction = o.traction;
    this.luck = o.luck;
    this.width = o.width;
  }

  public static fromJson(jsonDriverStats: any) {
    return new DriverStats(jsonDriverStats);
  }
}
