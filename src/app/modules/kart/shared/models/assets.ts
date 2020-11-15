import { Point } from './point';
import { Object3D } from 'three';

export interface Asset {
  texfile: string;
  width: 6;
  height: 28;
  autorotate: true;
  obj: Object3D;
  positions: Point[];
}

export interface Assets {
  lamp: Asset;
  light: Asset;
  arrows: Asset;
}
