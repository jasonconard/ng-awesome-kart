import { Driver } from './driver';
import { Circuit } from './circuit';
import { RacerItem } from './racerItem';
import { Mesh, MeshBasicMaterial, Object3D, PlaneGeometry, Vector2 } from 'three';
import { RacerResult } from './racerResult';

export const ROTATION_BASE_RATIO = 0.5;
export const ROTATION_SPEED_RATIO = 12;
export const ROTATION_HAND_BASE_RATIO = 1;
export const ROTATION_HANDLING_RATIO = 3;
export const DRIFT_BASE_RATIO = 0.8;
export const DRIFT_TRACTION_RATIO = 6;
export const COUNTER_DRIFT_BASE_RATIO = 0.2;
export const COUNTER_DRIFT_TRACTION_RATIO = 18;
export const DRIFT_MIN_SPEED = 0.5;
export const DRIFT_BLUE_TIME = 1200;
export const DRIFT_RED_TIME = 2400;
export const RATIO_TURBO_DRIFT = 0.4;
export const TIME_TURBO_DRIFT = 750;

export enum RotateDirection {
  'front', 'left', 'right'
}

export enum MoveAction {
  'no_move', 'go_forward', 'go_backward',
  'turn_left', 'turn_right', 'no_turn', 'jump',
  'object'
}

export enum RacerStatus {
  'normal', 'drifting', 'jumping'
}

export enum DriftFire {
  'none','blue', 'red'
}

export const RACER_PICS = {
  'SEE_LEFT': new Vector2(1,0),
  'TURN_LEFT': new Vector2(1,0),
  'SEE_RIGHT': new Vector2(3,0),
  'TURN_RIGHT': new Vector2(3,0),
  'GO_FORWARD': new Vector2(2,0),
  'DRIFT_LEFT_SMOKE': new Vector2(0,1),
  'DRIFT_LEFT_SMOKE2': new Vector2(1,1),
  'DRIFT_LEFT_SMOKE3': new Vector2(2,1),
  'DRIFT_LEFT_BLUE': new Vector2(0,2),
  'DRIFT_LEFT_BLUE2': new Vector2(1,2),
  'DRIFT_LEFT_BLUE3': new Vector2(2,2),
  'DRIFT_LEFT_RED': new Vector2(0,3),
  'DRIFT_LEFT_RED2': new Vector2(1,3),
  'DRIFT_LEFT_RED3': new Vector2(2,3),
  'DRIFT_RIGHT_SMOKE': new Vector2(3,1),
  'DRIFT_RIGHT_SMOKE2': new Vector2(4,1),
  'DRIFT_RIGHT_SMOKE3': new Vector2(5,1),
  'DRIFT_RIGHT_BLUE': new Vector2(3,2),
  'DRIFT_RIGHT_BLUE2': new Vector2(4,2),
  'DRIFT_RIGHT_BLUE3': new Vector2(5,2),
  'DRIFT_RIGHT_RED': new Vector2(3,3),
  'DRIFT_RIGHT_RED2': new Vector2(4,3),
  'DRIFT_RIGHT_RED3': new Vector2(5,3)
}

export interface Design {
  material: MeshBasicMaterial,
  geometry: PlaneGeometry,
  plane: Mesh,
  obj: Object3D
}

export class Racer {
  driver: Driver;
  circuit: Circuit;
  x: number;
  y: number;
  z: number;

  rotation: number;
  angle: number;

  driftDirection: RotateDirection;

  accelerationLevel: number;
  speed: number;
  ground: number;
  groundBeforeJump: number;
  zBeforeJump: number;

  fps: number;

  status: number;
  driftingTime: number;

  canJump: boolean;
  rotateDirection: RotateDirection;

  bonus: number;
  bonusTimeout: number;

  design: Design;

  points: number;
  nbCheckpoint: number;
  turn: number;

  totalTime: number;

  checkpoint: any; // TODO : Type checkpoint ? (see Circuit.Checkpoint)

  receivedItems: RacerItem[];
  totalItems: RacerItem[];

  racerResult: RacerResult;

  constructor(o: Partial<Racer>) {
    this.driver = o.driver;
    this.circuit = o.circuit;

    this.x = o.x || 0;
    this.y = o.y || 0;
    this.z = o.z;

    this.rotation = o.rotation;
    this.angle = o.angle || 0;

    this.driftDirection = o.driftDirection;
    this.accelerationLevel = o.accelerationLevel || 0;
    this.speed = o.speed || 0;
    this.ground = o.ground || 0;
    this.groundBeforeJump = o.groundBeforeJump || 0;
    this.zBeforeJump = o.zBeforeJump || 0;

    this.fps = o.fps;

    this.status = o.status;
    this.driftingTime = o.driftingTime;

    this.canJump = o.canJump;
    this.rotateDirection = o.rotateDirection;

    this.bonus = o.bonus;
    this.bonusTimeout = o.bonusTimeout;

    this.design = o.design;

    this.points = o.points;

    this.nbCheckpoint = o.nbCheckpoint;

    this.turn = o.turn;

    this.totalTime = o.totalTime;

    this.checkpoint = o.checkpoint;

    this.receivedItems = o.receivedItems;
    this.totalItems = o.totalItems;

    this.racerResult = o.racerResult;
  }

}
