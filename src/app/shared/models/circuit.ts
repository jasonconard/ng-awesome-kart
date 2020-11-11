import { Checkpoint } from './checkpoint';
import { Point } from './point';
import { Item } from './item';
import { Assets } from './assets';
import { Building } from './building';
import { Sprite } from 'three';

export interface Circuit {
  id: string;
  name: string;
  width: number;
  height: number;
  map: string;
  normales: string;
  background: string;
  parallaxes: { img: string, speed: number, elem: HTMLElement }[];
  parallaxSizes: { x: number, y: number, scale: number, width: number, height: number };
  bgColor: string;
  backgroundBlobUrl: string;
  backgroundImage: HTMLImageElement;
  startPosition: Point;
  direction: number;
  mapGrounds: number[][];
  three: any;
  checkpoints: Checkpoint[];
  items: Item[];
  sprites: Sprite[];
  buildings: Building[];
}
