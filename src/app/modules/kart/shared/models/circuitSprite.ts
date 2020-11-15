import { Object3D } from 'three';

export interface CircuitSprite {
  texfile: string;
  width: 6;
  height: 28;
  autorotate: true;
  obj: Object3D;
  positions: SpritePosition[];
}

export interface SpritePosition {
  x: number,
  y: number,
  obj: Object3D
}
