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

  private screenElem: HTMLElement = null;

  constructor(private gameService: GameService,
              private driverService: DriverService,
              private circuitService: CircuitService,
              private controlsService: ControlsService) { }

  initRace(screenElem: HTMLElement, rules: Rules) {
    this.rules = rules;

    this.screenElem = screenElem;

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
        sub.unsubscribe();
      });
    });
  }

  public clearRace() {
    this.gameService.clearRace();
  }

  retry() {
    this.initRace(this.screenElem, this.rules);
  }


}
