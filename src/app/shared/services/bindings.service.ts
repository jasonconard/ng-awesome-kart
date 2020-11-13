import { Injectable } from '@angular/core';
import { MoveAction } from '../models/racer';
import { Subject } from 'rxjs';
import { Stick } from '../models/stick';
import { MathUtils } from 'three';
import degToRad = MathUtils.degToRad;

@Injectable({
  providedIn: 'root'
})
export class BindingsService {

  private stickSubject = new Subject<Stick>();
  public stickState = this.stickSubject.asObservable();

  private keydownSubject = new Subject<string>();
  public keydownState = this.keydownSubject.asObservable();

  public inverted: boolean = false;
  public invertedTimeout: number = -1;

  private stickRadius = 60;

  public stick: Stick = null;

  public isTouchDevice: boolean = ("ontouchstart" in document.documentElement);

  private BINDING_TYPE = {
    'KEYBOARD': 'keyboard',
    'KEYBOARD_INVERTED': 'keyboard_inverted',
    'TOUCHSCREEN': 'touchscreen',
    'CARDBOARD': 'cardboard'
  };

  private GO_FORWARD_ACC = 3;
  private GO_BACKWARD_ACC = 6;
  private GO_FORWARD_CB = 1;
  private GO_BACKWARD_CB = 4;

  private directionTouches = null;
  private driftTouches = null;

  public mode: string = this.BINDING_TYPE.KEYBOARD;
  public orientation = screen.orientation ? screen.orientation.angle : 180;

  public accelerometer = null;
  public down: any = {};

  constructor() {
    document.addEventListener('keydown', (e) => {
      this.keydownSubject.next(e.code);
      this.down[e.which] = true;

    });

    document.addEventListener('keyup', (e) => {
      this.down[e.which] = false;
    });
  }

  public invertBindings(duration: number){
    if(!this.inverted){
      this.inverted = true;
      this.invertedTimeout = setTimeout(() => {
        this.inverted = false;
      }, duration);
    }
  }

  public updateStick(stick: Stick) {
    this.stick = stick;
    this.stickSubject.next(stick);
  }

  public bindTouching(canvas: HTMLElement) {

    canvas.addEventListener("touchstart", (e) => {
      const touches = e.touches[e.touches.length - 1];
      const canvasWidth = canvas.getBoundingClientRect().width;
      if(touches.clientX > canvasWidth / 2) {
        if(!this.driftTouches){
          this.driftTouches = touches;
          this.down[68] = true;
        }
      } else {

        this.updateStick({
          begin: { x: touches.clientX, y: touches.clientY },
          current: { x: touches.clientX, y: touches.clientY },
          radius: this.stickRadius
        });

        if(!this.directionTouches){
          this.directionTouches = touches;
        }
      }
    }, false);


    canvas.addEventListener("touchend", (e) => {
      this.updateStick(null)
      const currentFingerReleased = e.changedTouches[0];
      if(this.driftTouches && currentFingerReleased.identifier === this.driftTouches.identifier){
        this.driftTouches = null;
        this.down[68] = false;
      }
      if(this.directionTouches && currentFingerReleased.identifier === this.directionTouches.identifier){
        this.directionTouches = null;
        this.down[37] = false;
        this.down[38] = false;
        this.down[39] = false;
        this.down[40] = false;
      }
    }, false);
    canvas.addEventListener("touchmove", (e) => {
      if (e['scale'] !== 1) { e.preventDefault(); }
      const currentFingerMoved = e.changedTouches[0];
      if(this.directionTouches && currentFingerMoved.identifier === this.directionTouches.identifier){

        const diffX = currentFingerMoved.clientX - this.directionTouches.clientX;
        const diffY = currentFingerMoved.clientY - this.directionTouches.clientY;
        const angle = Math.asin( diffY / Math.sqrt((diffX*diffX)+(diffY*diffY))) * 180 / Math.PI;

        let computedAngle = angle;
        if(diffX > 0) {
          computedAngle = 180 - angle;
        } else {
          computedAngle = (360 + angle) % 360;
        }


        if(this.stick) {
          const dist = Math.sqrt( Math.pow(this.stick.begin.x - currentFingerMoved.clientX, 2) + Math.pow(this.stick.begin.y - currentFingerMoved.clientY, 2));
          if(dist > this.stick.radius -10) {
            const x = Math.cos(degToRad(computedAngle)) * (-this.stick.radius+10);
            const y = Math.sin(degToRad(computedAngle)) * (this.stick.radius-10);
            this.updateStick({
              ...this.stick,
              current: { x: x + this.stick.begin.x, y: y + this.stick.begin.y }
            });
          } else {
            this.updateStick({
              ...this.stick,
              current: { x: currentFingerMoved.clientX, y: currentFingerMoved.clientY }
            });
          }
        }


        this.down[37] = false;
        this.down[38] = false;
        this.down[39] = false;
        this.down[40] = false;

        // SOUTH WEST
        if(computedAngle >= 0 && computedAngle < 67.5) {
          this.down[37] = true;
          this.down[40] = true;
        }
        // SOUTH
        if(computedAngle >= 67.5 && computedAngle < 112.5) {
          this.down[40] = true;
        }
        // SOUTH EAST
        if(computedAngle >= 112.5 && computedAngle < 180) {
          this.down[40] = true;
          this.down[39] = true;
        }
        // NORTH EAST
        if(computedAngle >= 180 && computedAngle < 247.5) {
          this.down[39] = true;
          this.down[38] = true;
        }
        // NORTH
        if(computedAngle >= 247.5 && computedAngle < 292.5) {
          this.down[38] = true;
        }
        // NORTH WEST
        if(computedAngle >= 292.5 && computedAngle < 360) {
          this.down[38] = true;
          this.down[37] = true;
        }

      }
    }, { passive: false });
  }

  /**
   * Set a bind for actions (useful for touchscreen btn)
   * @param input : string
   * @param status : boolean
   */
  public setBind(input: string, status: boolean){
    this.down[input] = status;
  }

  public setMode(mode: string){
    this.mode = mode;
  }

  public getAction(){
    let actions = {};
    let rotation = null;

    if(this.mode === this.BINDING_TYPE.KEYBOARD){
      if(this.down[this.inverted ? 40 : 38]){
        actions[MoveAction.go_forward] = true;
      } else if(this.down[this.inverted ? 38 : 40]){
        actions[MoveAction.go_backward] = true;
      } else {
        actions[MoveAction.no_move] = true;
      }

      if(this.down[this.inverted ? 39 : 37]){
        actions[MoveAction.turn_left] = true;
      } else if(this.down[this.inverted ? 37 : 39]){
        actions[MoveAction.turn_right] = true;
      } else {
        actions[MoveAction.no_turn] = true;
      }

      if(this.down[68]){
        actions[MoveAction.jump] = true;
      }

      // TODO OBJ BIND

    }else if(this.mode === this.BINDING_TYPE.KEYBOARD_INVERTED){

    }else if(this.mode === this.BINDING_TYPE.TOUCHSCREEN){
      if(this.accelerometer){
        if(this.accelerometer.z < this.GO_FORWARD_ACC){
          actions[MoveAction.go_backward] = true;
        } else if(this.accelerometer.z > this.GO_BACKWARD_ACC){
          actions[MoveAction.go_forward] = true;
        } else {
          actions[MoveAction.no_move] = true;
        }

        rotation = this.getCurrentRotation();
        if(rotation && rotation.turn === "left"){
          actions[MoveAction.turn_left] = true;
        } else if(rotation && rotation.turn === "right"){
          actions[MoveAction.turn_right] = true;
        } else {
          actions[MoveAction.no_turn] = true;
        }
      }

      if(this.down['jump']){
        actions[MoveAction.jump] = true;
      }

      if(this.down['object']){
        actions[MoveAction.object] = true;
      }

    } else if(this.mode === this.BINDING_TYPE.CARDBOARD){
      if(this.accelerometer){
        if(this.accelerometer.z < this.GO_FORWARD_CB){
          actions[MoveAction.go_backward] = true;
        } else if(this.accelerometer.z > this.GO_BACKWARD_CB){
          actions[MoveAction.go_forward] = true;
        } else {
          actions[MoveAction.no_move] = true;
        }

        rotation = this.getCurrentRotation();
        if(rotation && rotation.turn === "left"){
          actions[MoveAction.turn_left] = true;
        } else if(rotation && rotation.turn === "right"){
          actions[MoveAction.turn_right] = true;
        } else {
          actions[MoveAction.no_turn] = true;
        }
      }

      if(this.down['jump_cardboard']){
        actions[MoveAction.jump] = true;
      }

      if(this.down['object']){
        actions[MoveAction.object] = true;
      }

    }

    return actions;
  }

  public getCurrentRotation(){

    this.orientation = screen.orientation ? screen.orientation.angle : 180;
    if(!this.accelerometer) return null;
    if(this.orientation === 90){
      if(this.accelerometer.y < -1){
        return { turn: 'left', ratio: Math.abs(this.accelerometer.y+1) };
      }
      if(this.accelerometer.y > 1){
        return { turn: 'right', ratio: Math.abs(this.accelerometer.y-1) };
      }
    }
    if(this.orientation === 270){
      if(this.accelerometer.y > 1){
        return { turn: 'left', ratio: Math.abs(this.accelerometer.y-1) };
      }
      if(this.accelerometer.y < -1){
        return { turn: 'right', ratio: Math.abs(this.accelerometer.y+1) };
      }
    }

    if(this.orientation === 180){
      if(this.accelerometer.x < -1){
        return { turn: 'left', ratio: Math.abs(this.accelerometer.x+1) };
      }
      if(this.accelerometer.x > 1){
        return { turn: 'right', ratio: Math.abs(this.accelerometer.x-1) };
      }
    }
    if(this.orientation === 0){
      if(this.accelerometer.x > 1){
        return { turn: 'left', ratio: Math.abs(this.accelerometer.x-1) };
      }
      if(this.accelerometer.x < -1){
        return { turn: 'right', ratio: Math.abs(this.accelerometer.x+1) };
      }
    }

    return null;
  }
}
