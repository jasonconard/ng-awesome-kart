import { Checkpoint } from './checkpoint';
import { Point } from './point';
import { Item } from './item';
import { Building } from './building';
import { Sprite } from 'three';
import { MeshWrapper } from './meshWrapper';

export interface Circuit {
  id: string;
  name: string;
  width: number;
  height: number;
  map: string;
  normales: string;
  background: string;
  backgroundBottom: string;
  backgroundTop: string;
  background3d: MeshWrapper;
  //parallaxes: { img: string, speed: number, elem: HTMLElement }[];
  //parallaxSizes: { x: number, y: number, scale: number, width: number, height: number };
  bgColor: string;
  backgroundBlobUrl: string;
  backgroundImage: HTMLImageElement;
  startPosition: Point;
  direction: number;
  mapGrounds: number[][];
  three: MeshWrapper;
  checkpoints: Checkpoint[];
  items: Item[];
  sprites: Sprite[];
  buildings: Building[];
}
