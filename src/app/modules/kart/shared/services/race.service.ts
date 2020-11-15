import { Injectable } from '@angular/core';
import { ControlsType } from '../enums/controls';
import { Racer, RacerStatus, RotateDirection } from '../models/racer';
import { CAMERA_HEIGHT, OBJECTIVE } from '../../kart.constants';
import { Driver } from '../models/driver';
import { Circuit } from '../models/circuit';
import { DriverService } from './driver.service';
import { CircuitService } from './circuit.service';
import { ControlsService } from './controls.service';
import { MathUtils } from 'three';
import { GameService } from './game.service';
import { Subject } from 'rxjs';
import degToRad = MathUtils.degToRad;

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private loadingSubject = new Subject<boolean>();
  public loadingState = this.loadingSubject.asObservable();

  private racerSubject = new Subject<Racer>();
  public racerState = this.racerSubject.asObservable();

  private driver: Driver;
  private circuit: Circuit;
  private racer: Racer;

  private parallaxInterval: number = -1;

  private screenElem: HTMLElement = null;
  private parallaxElem: HTMLElement = null;

  constructor(private gameService: GameService,
              private driverService: DriverService,
              private circuitService: CircuitService,
              private controlsService: ControlsService) { }

  initRace(screenElem: HTMLElement, parallaxElem: HTMLElement) {

    this.screenElem = screenElem;
    this.parallaxElem = parallaxElem;

    this.driver = this.driverService.currentDriver;
    this.circuit = this.circuitService.currentCircuit;

    this.clearRace();

    this.racer = null;
    this.loadingSubject.next(true);

    this.controlsService.setMode(window['cordova'] ? ControlsType.touchscreen : ControlsType.keyboard);

    //this.stereoEnabled = false;
    //this.accelerometer = null;

    this.racer = new Racer({
      driver: this.driver,
      circuit: this.circuit,
      rotation: this.circuit.direction,
      x: this.circuit.startPosition.x,
      y: this.circuit.startPosition.y,
      z: CAMERA_HEIGHT,

      angle: degToRad(0),
      driftDirection: RotateDirection.front,

      accelerationLevel: 0,
      speed: 0,
      ground: 1,
      groundBeforeJump: 1,
      zBeforeJump: 0,

      status: RacerStatus.normal,
      driftingTime: -1,

      canJump: true,
      rotateDirection: RotateDirection.front,

      bonus: 1,
      bonusTimeout: null,

      design: null,

      points: 0,

      nbCheckpoint: 0,
      turn: 0,
      checkpoint: this.circuit.checkpoints[0],

      totalTime: 0,

      receivedItems: [],
      totalItems: []
    });

    this.racer.totalTime = 0;

    this.racerSubject.next(this.racer);

    setTimeout( () => {
      const sub = this.gameService.initScene(screenElem, this.racer).subscribe( () => {
        this.loadingSubject.next(false);
        this.initParallax(parallaxElem);
        sub.unsubscribe();
      });
    });
  }

  private updateBackgroundRotation() {
    const moduloAngle = (this.racer.angle*180/Math.PI) % 360;
    const reducedWidth = this.racer.circuit.parallaxSizes.width / 360;

    this.racer.circuit.parallaxes.forEach((para) => {
      para.elem.style.transform = 'translate3d('+((para.speed * moduloAngle) * reducedWidth) + 'px, 0, 0)';
    });

  }

  private initParallax(parallaxElem: HTMLElement) {

    const $parallax = parallaxElem;
    if(!$parallax) { return; }
    $parallax.innerHTML = "";
    const parallaxSizes = this.racer.circuit.parallaxSizes;
    const parallaxes = this.racer.circuit.parallaxes;

    parallaxes.forEach((paralax) => {
      const $para = document.createElement('div');
      $para.className = "parallax-ctnr";
      $para.style.width = parallaxSizes.width * 3 + "px";
      $para.style.height = parallaxSizes.height + "px";
      $para.style.willChange = 'transform';
      paralax.elem = $para;

      for(let i = -1; i < 2; i++) {
        const $back = document.createElement('div');
        $back.className = "pixellated-background parallax-background";
        $back.style.backgroundImage = "url('"+paralax.img+"')";
        $back.style.transform = "translate3d(" + parallaxSizes.width * i + "px, 0, 0)";
        $back.style.backgroundSize = parallaxSizes.width+"px "+parallaxSizes.height+"px";

        $para.appendChild($back);
      }

      $parallax.appendChild($para);
    });

    clearInterval(this.parallaxInterval);
    this.parallaxInterval = setInterval( () => {
      this.updateBackgroundRotation();
    }, 1000 / 30);
  }

  public clearRace() {
    if(this.parallaxElem) {
      this.parallaxElem.innerHTML = "";
    }
    clearInterval(this.parallaxInterval);
    this.gameService.clearRace();
  }

  retry() {
    this.initRace(this.screenElem, this.parallaxElem);
  }


}
