import { Injectable } from '@angular/core';
import { CircuitService } from './circuit.service';
import {
  COUNTER_DRIFT_BASE_RATIO,
  COUNTER_DRIFT_TRACTION_RATIO,
  DRIFT_BASE_RATIO,
  DRIFT_BLUE_TIME,
  DRIFT_MIN_SPEED,
  DRIFT_RED_TIME,
  DRIFT_TRACTION_RATIO,
  DriftFire,
  MoveAction,
  Racer, RACER_PICS,
  RacerStatus,
  RATIO_TURBO_DRIFT,
  RotateDirection,
  ROTATION_BASE_RATIO,
  ROTATION_HAND_BASE_RATIO,
  ROTATION_HANDLING_RATIO,
  ROTATION_SPEED_RATIO,
  TIME_TURBO_DRIFT
} from '../models/racer';
import { DoubleSide, MathUtils, Mesh, MeshBasicMaterial, NearestFilter, Object3D, PlaneGeometry, TextureLoader, Vector2 } from 'three';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriverService } from './driver.service';
import { Item, ItemType } from '../models/item';
import { RacerItem } from '../models/racerItem';
import { ControlsService } from './controls.service';

@Injectable({
  providedIn: 'root'
})
export class RacerService {

  constructor(private circuitService: CircuitService,
              private controlsService: ControlsService,
              private driverService: DriverService) { }


  public getGround(x: number, y: number): number {
    return this.circuitService.getGroundValue(x, y);
  }

  public move(racer: Racer, moveAction: MoveAction) {
    racer.ground = this.getGround(racer.x, racer.y);
    racer.accelerationLevel = this.driverService.getCarCurrentAccelerationLevel(moveAction, racer);
    this.moveComputing(racer);
  }

  public moveComputing(racer: Racer) {
    const ground = racer.groundBeforeJump || racer.ground;

    //var cc = {
    //       '50cc': 180,
    //       '100cc': 150,
    //       '150cc': 130,
    //       '200cc': 80
    //     };

    racer.speed = this.driverService.getCarCurrentSpeed(racer) / 180;

    racer.angle = MathUtils.degToRad(racer.rotation);

    const nextX = racer.x + (Math.sin(racer.angle) * racer.speed);
    const nextY = racer.y + (Math.cos(racer.angle) * racer.speed);

    const nextGround = this.getGround(nextX, nextY);

    if(nextGround > 0.05){

      this.manageCheckpoints(racer, nextX, nextY);
      this.manageItems(racer);

      racer.x = nextX;
      racer.y = nextY;

    } else {
      racer.accelerationLevel = -Math.round(racer.accelerationLevel * ground);
    }
  }


  public manageCheckpoints(racer: Racer, nextX: number, nextY: number){
    const passTrough = this.isThroughCheckpoint(
      new Vector2(racer.x, racer.y),
      new Vector2(nextX, nextY),
      racer.checkpoint.a,
      racer.checkpoint.b
    );

    if(passTrough){
      const cps = racer.circuit.checkpoints;
      racer.nbCheckpoint = racer.nbCheckpoint + 1;

      const cpId = racer.nbCheckpoint % cps.length;
      racer.checkpoint = cps[cpId];

      racer.turn = Math.floor(racer.nbCheckpoint / cps.length);

      console.log('Checkpoints passed : ' + racer.nbCheckpoint + '/' + cps.length);

    }
  }

  public manageItems(racer: Racer) {
    racer.circuit.items.forEach(item => {
      if(Math.abs(item.tempPos.x - racer.x) < 6 && Math.abs(-item.tempPos.y - racer.y) < 6) {
        this.getItem(racer, item);
      }
    });
  }

  public getItem(racer: Racer, item: Item){

    if(item.available){

      const receivedItem: RacerItem = {
        img: item.img,
        libelle: item.libelle || 'Unknown name',
        effectClass: '',
        effect: ''
      };

      switch(item.type) {
        case ItemType.super_malus:
          racer.points = 0;
          receivedItem.effectClass = 'supermalus';
          receivedItem.effect = 'pts = 0';
          break;
        case ItemType.malus:
          racer.points -= item.value;
          receivedItem.effectClass = 'malus';
          receivedItem.effect = '-' + item.value + 'pt' + (item.value > 1 ? 's': '');
          break;
        case ItemType.bonus:
          racer.points += item.value;
          receivedItem.effectClass = 'bonus';
          receivedItem.effect = '+' + item.value + 'pt' + (item.value > 1 ? 's': '');
          break;
        case ItemType.super_bonus:
          racer.points += item.value;
          receivedItem.effectClass = 'superbonus';
          receivedItem.effect = '+' + item.value + 'pt' + (item.value > 1 ? 's': '');
          break;
        case ItemType.invert:
          this.controlsService.invertBindings(item.duration);
          receivedItem.effectClass = 'supermalus';
          receivedItem.effect = 'inversion!!';
          break;
        case ItemType.slow:
          this.setBonus(racer, item.value, item.duration);
          receivedItem.effectClass = 'supermalus';
          receivedItem.effect = 'lenteur!!';
          break;
        case ItemType.speed:
          this.setBonus(racer, item.value, item.duration);
          receivedItem.effectClass = 'superbonus';
          receivedItem.effect = 'boost!!';
          break;
      }

      racer.receivedItems.unshift(receivedItem);

      racer.totalItems.push(receivedItem);

      setTimeout(() => {
        racer.receivedItems.splice(racer.receivedItems.indexOf(receivedItem), 1);
      }, 1500);

    }



    if(item.timeout && item.available){
      item.available = false;
      setTimeout(() =>{
        item.available = true;
      }, item.timeout);
    } else {
      item.available = false;
    }
  }

  public isThroughCheckpoint(kartFrom : Vector2, kartTo: Vector2, checkPointA: Vector2, checkPointB: Vector2): boolean {
    const p1 = kartFrom.x < kartTo.x ? kartFrom : kartTo;
    const p2 = kartFrom.x < kartTo.x ? kartTo : kartFrom;

    const p3 = checkPointA.x < checkPointB.x ? checkPointA : checkPointB;
    const p4 = checkPointA.x < checkPointB.x ? checkPointB : checkPointA;

    const commonDivider = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    if(!commonDivider) return false;

    const ua = ((p4.x - p3.x)*(p1.y - p3.y) - (p4.y - p3.y)*(p1.x - p3.x)) / commonDivider;
    const ub = ((p2.x - p1.x)*(p1.y - p3.y) - (p2.y - p1.y)*(p1.x - p3.x)) / commonDivider;

    return ua > 0 && ua < 1 && ub > 0 && ub < 1;
  }

  public rotate(racer: Racer, direction: RotateDirection){
    let rotationPerFrame = 0;
    racer.rotateDirection = direction;
    if(direction === RotateDirection.front){
      if(racer.status === RacerStatus.drifting) {
        rotationPerFrame = this.getRotationPerFrame(racer);
        if(racer.driftDirection === RotateDirection.left){
          rotationPerFrame = -rotationPerFrame;
        }
      }
    } else {
      rotationPerFrame = this.getRotationPerFrame(racer);
      if (racer.status === RacerStatus.jumping && racer.driftDirection === RotateDirection.front) {
        racer.driftDirection = direction;
      }

      if (racer.status === RacerStatus.drifting) {
        if (racer.driftDirection === RotateDirection.front) {
          racer.driftDirection = direction;
        }

        if (racer.driftDirection === direction) {
          rotationPerFrame *= DRIFT_BASE_RATIO + racer.driver.stats.traction / DRIFT_TRACTION_RATIO;
        } else {
          rotationPerFrame *= -(COUNTER_DRIFT_BASE_RATIO + racer.driver.stats.traction / COUNTER_DRIFT_TRACTION_RATIO);
        }
      }
    }
    if(direction === RotateDirection.left){
      rotationPerFrame = -rotationPerFrame;
    }

    racer.rotation = ( racer.rotation - rotationPerFrame + 360 ) % 360;
  }

  public getRotationPerFrame(racer: Racer): number{
    const speedVar = (!racer.speed ? 0 : ROTATION_BASE_RATIO - Math.abs(racer.speed) / ROTATION_SPEED_RATIO);
    const handlingVar = ROTATION_HAND_BASE_RATIO + racer.driver.stats.handling / ROTATION_HANDLING_RATIO;
    return speedVar * handlingVar;
  }

  public cancelDrift(racer: Racer){
    if(racer.status === RacerStatus.drifting){
      racer.status = RacerStatus.normal;
      racer.driftDirection = RotateDirection.front;
      racer.driftingTime = -1;
    }
  }

  public jump(racer: Racer) {
    let moving = 0;
    if (racer.canJump && racer.status !== RacerStatus.drifting && racer.status !== RacerStatus.jumping) {
      racer.zBeforeJump = racer.design.obj.position.z;
      moving = racer.design.obj.position.z;
      racer.canJump = false;
      racer.status = RacerStatus.jumping;
      racer.groundBeforeJump = racer.ground;

      const jumpIntervalUp = setInterval( () => {
        //Fix javascript number bug (try 3/15+3/15+3/15 on chrome debugger :D )
        moving = Math.round((moving + 3 / 15) * 100) / 100;
        racer.design.obj.position.z = moving;
      }, 10);
      setTimeout( () => {
        clearInterval(jumpIntervalUp);
      }, 140);

      setTimeout( () => {
        const jumpIntervalDown = setInterval( () => {
          moving = Math.round((moving - 3 / 15) * 100) / 100;
          racer.design.obj.position.z = moving;
        }, 10);

        setTimeout( () => {
          clearInterval(jumpIntervalDown);
        }, 140);
      }, 150);

      setTimeout(() => {
        racer.design.obj.position.z = racer.zBeforeJump;
        racer.groundBeforeJump = null;
        if (racer.speed > DRIFT_MIN_SPEED && racer.rotateDirection !== RotateDirection.front) {
          racer.driftDirection = racer.rotateDirection;
          racer.status = RacerStatus.drifting;
          racer.driftingTime = new Date().getTime();
        } else {
          racer.status = RacerStatus.normal;
        }
      }, 301);

      setTimeout(() => {
        racer.canJump = true;
      }, 550);
    }
  }

  public getDriftingFire(racer: Racer, currentTime: number): DriftFire {
    if(racer.status === RacerStatus.drifting){
      const driftingDuration = currentTime - racer.driftingTime;
      if(driftingDuration > DRIFT_RED_TIME) {
        return DriftFire.red;
      } else if(driftingDuration > DRIFT_BLUE_TIME) {
        return DriftFire.blue;
      }
    }
    return DriftFire.none;
  }

  public driftTurbo(racer: Racer){
    if(racer.driftingTime > 0){
      const driftingFire = this.getDriftingFire(racer, new Date().getTime());
      this.setBonus(racer, 1 + driftingFire*RATIO_TURBO_DRIFT, TIME_TURBO_DRIFT);
    }

    this.cancelDrift(racer);
  }

  public setBonus(racer: Racer, amount: number, duration: number){
    if(racer.bonusTimeout >= 0){
      clearTimeout(racer.bonusTimeout);
    }

    racer.bonus = amount;
    racer.bonusTimeout = setTimeout( () => {
      racer.bonus = 1;
    }, duration);
  }

  public getGeometryFromRacer(racer: Racer, picPos: Vector2): PlaneGeometry {
    const spriteCellNb = 10;

    const step = 1/spriteCellNb;

    const x = picPos.x * step;
    const y = 1 - picPos.y * step;

    const trackMapping: Vector2[] = [
      new Vector2(x,y), // left bottom
      new Vector2(x,y-step), // left top
      new Vector2(x+step,y-step), // right top
      new Vector2(x+step,y),  // right bottom
    ];

    const carGeometry = new PlaneGeometry( racer.driver.stats.width * 1.5, racer.driver.stats.width * 1.5, 1, 1);

    carGeometry.faceVertexUvs[0][0] = [ trackMapping[0], trackMapping[1], trackMapping[3] ];
    carGeometry.faceVertexUvs[0][1] = [ trackMapping[1], trackMapping[2], trackMapping[3] ];

    return carGeometry;
  }

  public updateRacerPic(racer: Racer, picPos: Vector2) {

    racer.design.plane.geometry.dispose();
    const carGeometry = this.getGeometryFromRacer(racer, picPos);
    racer.design.plane.geometry = carGeometry;
    racer.design.geometry = carGeometry;

  }

  public loadDesignElement(racer: Racer): Observable<any>{
    return this.loadCharacterMaterial(racer).pipe( map( material => {
      racer.driver.sprite.mat = material;

      const carGeometry = this.getGeometryFromRacer(racer, RACER_PICS.GO_FORWARD);

      const carPlane = new Mesh(carGeometry, racer.driver.sprite.mat);

      const carObj = new Object3D();
      carObj.position.x = racer.x;
      carObj.position.y = -racer.y;
      carObj.position.z = racer.driver.stats.width * 0.75;
      carObj.add(carPlane);
      carPlane.rotation.x = Math.PI/2;

      racer.design = {
        material: material,
        geometry: carGeometry,
        plane: carPlane,
        obj: carObj
      };

      return racer.design;
    }));
  }


  public loadCharacterMaterial(racer: Racer): Observable<MeshBasicMaterial>{

    return new Observable<MeshBasicMaterial>((observer: Observer<MeshBasicMaterial>) => {
      const loader = new TextureLoader();

      loader.load(racer.driver.sprite.url, (tex) => {
        tex.magFilter = NearestFilter;
        tex.minFilter = NearestFilter;

        const mat = new MeshBasicMaterial({
          map: tex,
          transparent: true,
          side: DoubleSide
        });

        observer.next(mat);
        observer.complete();
      },
      () => {},
      () => {
        observer.error('ERR_LOAD_MESH');
      });
    });

  }

}
