import { Injectable } from '@angular/core';
import { ControlsType } from '../enums/controls';
import { Racer, RacerStatus, RotateDirection } from '../models/racer';
import { CAMERA_HEIGHT } from '../../kart.constants';
import { DriverService } from './driver.service';
import { CircuitService } from './circuit.service';
import { ControlsService } from './controls.service';
import { MathUtils } from 'three';
import { GameService } from './game.service';
import { Subject } from 'rxjs';
import degToRad = MathUtils.degToRad;
import { Race } from '../models/race';
import radToDeg = MathUtils.radToDeg;
import { Rules } from '../models/rules';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private loadingSubject = new Subject<boolean>();
  public loadingState = this.loadingSubject.asObservable();

  private raceSubject = new Subject<Race>();
  public raceState = this.raceSubject.asObservable();

  private race: Race;
  public rules: Rules;

  private parallaxInterval: number = -1;

  private screenElem: HTMLElement = null;
  private parallaxElem: HTMLElement = null;

  constructor(private gameService: GameService,
              private driverService: DriverService,
              private circuitService: CircuitService,
              private controlsService: ControlsService) { }

  initRace(screenElem: HTMLElement, parallaxElem: HTMLElement, rules: Rules) {
    this.rules = rules;

    this.screenElem = screenElem;
    this.parallaxElem = parallaxElem;

    this.clearRace();

    this.loadingSubject.next(true);

    this.controlsService.setMode(window['cordova'] ? ControlsType.touchscreen : ControlsType.keyboard);

    //this.stereoEnabled = false;
    //this.accelerometer = null;

    const circuit = this.circuitService.currentCircuit;
    const player = new Racer({
      driver: this.driverService.currentDriver,
      rotation: circuit.direction,
      x: circuit.startPosition.x,
      y: circuit.startPosition.y,
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
      checkpoint: circuit.checkpoints[0],

      turn: 0,
      totalTime: 0,

      receivedItems: [],
      totalItems: [],

      difficulty: rules.difficulty
    });

    this.race = {
      player,
      circuit,
      rules: this.rules,
      result: null,
      fps: 0,
      time: 0
    }

    this.raceSubject.next(this.race);

    setTimeout( () => {
      const sub = this.gameService.initScene(screenElem, this.race).subscribe( () => {
        this.loadingSubject.next(false);
        this.initParallax(parallaxElem);
        sub.unsubscribe();
      });
    });
  }

  private updateBackgroundRotation() {
    const player = this.race.player;
    const moduloAngle = radToDeg(player.angle) % 360;
    const reducedWidth = this.race.circuit.parallaxSizes.width / 360;

    this.race.circuit.parallaxes.forEach((para) => {
      para.elem.style.transform = 'translate3d('+((para.speed * moduloAngle) * reducedWidth) + 'px, 0, 0)';
    });

  }

  // TODO Make parallax inside 3D Scene (maybe more optimized)
  // TODO Multiple layered parallax
  private initParallax(parallaxElem: HTMLElement) {

    const $parallax = parallaxElem;
    if(!$parallax) { return; }
    $parallax.innerHTML = "";
    const parallaxSizes = this.race.circuit.parallaxSizes;
    const parallaxes = this.race.circuit.parallaxes;

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
    this.initRace(this.screenElem, this.parallaxElem, this.rules);
  }


}
