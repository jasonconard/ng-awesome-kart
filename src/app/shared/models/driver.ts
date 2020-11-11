import { SpriteDescriptor } from './spriteDescriptor';
import { DriverStats } from './driverStats';

export class Driver {
  id: string;
  name: string;
  sprite: SpriteDescriptor;
  //sprites: { [key: string]: SpriteDescriptor };
  mainColor: string;
  mainBackground: string;
  stats: DriverStats;

  constructor(o: Partial<Driver>) {
    this.id = o.id;
    this.name = o.name;
    this.sprite = o.sprite;
    this.mainColor = o.mainColor;
    this.mainBackground = o.mainBackground;
    this.stats = o.stats;
  }

  public static fromJson(jsonDriver: any) {
    return new Driver({
      ...jsonDriver,
      sprite: { url: jsonDriver.sprite, mat: null },
      stats: DriverStats.fromJson(jsonDriver.stats)
    });
  }
}
