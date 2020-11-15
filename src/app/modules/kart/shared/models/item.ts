import { Point } from './point';
import { Object3D } from 'three';

export enum MoveType {
  'stay', 'comeback', 'path'
}

export enum ItemType {
  'malus', 'super_malus', 'bonus', 'super_bonus', 'invert', 'slow', 'speed'
}

export interface Item {
  pos: Point;
  tempPos: Point;
  type: ItemType;
  value: number;
  duration: number;
  libelle: string;
  img: string;
  move: Move;
  timeout: number;
  obj: Object3D;
  available: boolean;
}

export interface Move {
  type: MoveType;
  iterations: number;
  path: Point[];
  goX: number;
  goY: number;
  sense: boolean;
  i: number;
}
