import { Injectable } from '@angular/core';
import { MoveAction } from '../models/racer';
import { Subject } from 'rxjs';
import { Stick } from '../models/stick';
import { MathUtils } from 'three';
import { ControlsKey, ControlsType } from '../enums/controls';
import { RotateDirection } from '../models/racer';
import degToRad = MathUtils.degToRad;

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  private stickSubject = new Subject<Stick>();
  public stickState = this.stickSubject.asObservable();

  private jumpPushedSubject = new Subject<boolean>();
  public jumpPushedState = this.jumpPushedSubject.asObservable();

  private keydownSubject = new Subject<string>();
  public keydownState = this.keydownSubject.asObservable();

  public inverted: boolean = false;
  public invertedTimeout: number = -1;

  private stickRadius = 60;

  public stick: Stick = null;

  public isTouchDevice: boolean = ("ontouchstart" in document.documentElement);

  private GO_FORWARD_ACC = 3;
  private GO_BACKWARD_ACC = 6;
  private GO_FORWARD_CB = 1;
  private GO_BACKWARD_CB = 4;

  private directionTouches = null;
  private driftTouches = null;

  public mode: ControlsType = ControlsType.keyboard;
  public orientation = screen.orientation ? screen.orientation.angle : 180;

  public accelerometer = null;
  public down: any = {};

  constructor() {
    document.addEventListener('keydown', (e) => {
      this.keydownSubject.next(e.code);
      const key: ControlsKey = this.getKeyFromKeyboardEvent(e);
      if(key !== null) {
        this.down[key] = true;
      }
      //this.down[e.which] = true;

    });

    document.addEventListener('keyup', (e) => {
      const key: ControlsKey = this.getKeyFromKeyboardEvent(e);
      if(key !== null) {
        this.down[key] = false;
      }
    });
  }

  getKeyFromKeyboardEvent(e: KeyboardEvent): ControlsKey {
    switch (e.code) {
      case 'ArrowUp': return ControlsKey.arrow_up;
      case 'ArrowDown': return ControlsKey.arrow_down;
      case 'ArrowLeft': return ControlsKey.arrow_left;
      case 'ArrowRight': return ControlsKey.arrow_right;
      case 'KeyD': return ControlsKey.jump;
    }
    return null;
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

  public updateJump(jumpPushed: boolean) {
    this.jumpPushedSubject.next(jumpPushed);
  }

  public bindTouching(canvas: HTMLElement) {

    canvas.addEventListener("touchstart", (e) => {
      const touches = e.touches[e.touches.length - 1];
      const canvasWidth = canvas.getBoundingClientRect().width;
      if(touches.clientX > canvasWidth / 2) {
        if(!this.driftTouches){
          this.driftTouches = touches;
          this.down[ControlsKey.jump] = true;
          this.updateJump(true);
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
        this.down[ControlsKey.jump] = false;

        this.updateJump(false);
      }
      if(this.directionTouches && currentFingerReleased.identifier === this.directionTouches.identifier){
        this.directionTouches = null;
        this.down[ControlsKey.arrow_left] = false;
        this.down[ControlsKey.arrow_right] = false;
        this.down[ControlsKey.arrow_up] = false;
        this.down[ControlsKey.arrow_down] = false;
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


        this.down[ControlsKey.arrow_left] = false;
        this.down[ControlsKey.arrow_right] = false;
        this.down[ControlsKey.arrow_up] = false;
        this.down[ControlsKey.arrow_down] = false;

        // SOUTH WEST
        if(computedAngle >= 0 && computedAngle < 67.5) {
          this.down[ControlsKey.arrow_left] = true;
          this.down[ControlsKey.arrow_down] = true;
        }
        // SOUTH
        if(computedAngle >= 67.5 && computedAngle < 112.5) {
          this.down[ControlsKey.arrow_down] = true;
        }
        // SOUTH EAST
        if(computedAngle >= 112.5 && computedAngle < 180) {
          this.down[ControlsKey.arrow_down] = true;
          this.down[ControlsKey.arrow_right] = true;
        }
        // NORTH EAST
        if(computedAngle >= 180 && computedAngle < 247.5) {
          this.down[ControlsKey.arrow_right] = true;
          this.down[ControlsKey.arrow_up] = true;
        }
        // NORTH
        if(computedAngle >= 247.5 && computedAngle < 292.5) {
          this.down[ControlsKey.arrow_up] = true;
        }
        // NORTH WEST
        if(computedAngle >= 292.5 && computedAngle < 360) {
          this.down[ControlsKey.arrow_up] = true;
          this.down[ControlsKey.arrow_left] = true;
        }

      }
    }, { passive: false });
  }

  /**
   * Set a bind for actions (useful for touchscreen btn)
   * @param input : ControlsKey
   * @param status : boolean
   */
  public setBind(input: ControlsKey, status: boolean){
    this.down[input] = status;
  }

  public setMode(mode: ControlsType){
    this.mode = mode;
  }

  public getAction(){
    let actions:{ [ key:string ]: boolean } = {};
    let rotation = null;

    if(this.mode === ControlsType.keyboard){
      if(this.down[this.inverted ? ControlsKey.arrow_down : ControlsKey.arrow_up]){
        actions[MoveAction.go_forward] = true;
      } else if(this.down[this.inverted ? ControlsKey.arrow_up : ControlsKey.arrow_down]){
        actions[MoveAction.go_backward] = true;
      } else {
        actions[MoveAction.no_move] = true;
      }

      if(this.down[this.inverted ? ControlsKey.arrow_right : ControlsKey.arrow_left]){
        actions[MoveAction.turn_left] = true;
      } else if(this.down[this.inverted ? ControlsKey.arrow_left : ControlsKey.arrow_right]){
        actions[MoveAction.turn_right] = true;
      } else {
        actions[MoveAction.no_turn] = true;
      }

      if(this.down[ControlsKey.jump]){
        actions[MoveAction.jump] = true;
      }

    }else if(this.mode === ControlsType.keyboard_inverted){

    }else if(this.mode === ControlsType.touchscreen){
      if(this.accelerometer){
        if(this.accelerometer.z < this.GO_FORWARD_ACC){
          actions[MoveAction.go_backward] = true;
        } else if(this.accelerometer.z > this.GO_BACKWARD_ACC){
          actions[MoveAction.go_forward] = true;
        } else {
          actions[MoveAction.no_move] = true;
        }

        rotation = this.getCurrentRotation();
        if(rotation && rotation.turn === RotateDirection.left){
          actions[MoveAction.turn_left] = true;
        } else if(rotation && rotation.turn === RotateDirection.right){
          actions[MoveAction.turn_right] = true;
        } else {
          actions[MoveAction.no_turn] = true;
        }
      }

      if(this.down[ControlsKey.jump]){
        actions[MoveAction.jump] = true;
      }

      if(this.down[ControlsKey.obj]){
        actions[MoveAction.object] = true;
      }

    } else if(this.mode === ControlsType.cardboard){
      if(this.accelerometer){
        if(this.accelerometer.z < this.GO_FORWARD_CB){
          actions[MoveAction.go_backward] = true;
        } else if(this.accelerometer.z > this.GO_BACKWARD_CB){
          actions[MoveAction.go_forward] = true;
        } else {
          actions[MoveAction.no_move] = true;
        }

        rotation = this.getCurrentRotation();
        if(rotation && rotation.turn === RotateDirection.left){
          actions[MoveAction.turn_left] = true;
        } else if(rotation && rotation.turn === RotateDirection.right){
          actions[MoveAction.turn_right] = true;
        } else {
          actions[MoveAction.no_turn] = true;
        }
      }

      if(this.down[ControlsKey.jump]){
        actions[MoveAction.jump] = true;
      }

      if(this.down[ControlsKey.obj]){
        actions[MoveAction.object] = true;
      }

    }

    return actions;
  }

  public getCurrentRotation(): { turn: RotateDirection, ratio: number } {

    this.orientation = screen.orientation ? screen.orientation.angle : 180;
    if(!this.accelerometer) return null;
    if(this.orientation === 90){
      if(this.accelerometer.y < -1){
        return { turn: RotateDirection.left, ratio: Math.abs(this.accelerometer.y+1) };
      }
      if(this.accelerometer.y > 1){
        return { turn: RotateDirection.right, ratio: Math.abs(this.accelerometer.y-1) };
      }
    }
    if(this.orientation === 270){
      if(this.accelerometer.y > 1){
        return { turn: RotateDirection.left, ratio: Math.abs(this.accelerometer.y-1) };
      }
      if(this.accelerometer.y < -1){
        return { turn: RotateDirection.right, ratio: Math.abs(this.accelerometer.y+1) };
      }
    }

    if(this.orientation === 180){
      if(this.accelerometer.x < -1){
        return { turn: RotateDirection.left, ratio: Math.abs(this.accelerometer.x+1) };
      }
      if(this.accelerometer.x > 1){
        return { turn: RotateDirection.right, ratio: Math.abs(this.accelerometer.x-1) };
      }
    }
    if(this.orientation === 0){
      if(this.accelerometer.x > 1){
        return { turn: RotateDirection.left, ratio: Math.abs(this.accelerometer.x-1) };
      }
      if(this.accelerometer.x < -1){
        return { turn: RotateDirection.right, ratio: Math.abs(this.accelerometer.x+1) };
      }
    }

    return null;
  }
}
