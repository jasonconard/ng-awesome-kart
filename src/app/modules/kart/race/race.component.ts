import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { Driver } from '../shared/models/driver';
import { Circuit } from '../shared/models/circuit';
import { Racer } from '../shared/models/racer';
import { DriverService } from '../shared/services/driver.service';
import { CircuitService } from '../shared/services/circuit.service';
import { GameService } from '../shared/services/game.service';
import { ControlsService } from '../shared/services/controls.service';
import { RaceService } from '../shared/services/race.service';
import { OBJECTIVE } from '../kart.constants';

@Component({
  selector: 'kart-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  animations: [
    trigger('itemAppear', [
      transition(':enter', [
        style({ opacity: 0, left: -400, transform: 'scale(0.3)' }),
        animate('200ms', style( { opacity: 1, left: 0, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, left: 0, transform: 'scale(1)' }),
        animate('200ms', style({ opacity: 0, left: -400, transform: 'scale(0.3)' }))
      ])
    ])
  ]
})
export class RaceComponent implements OnInit, OnDestroy {

  public subs: Subscription[] = [];

  @ViewChild('screen', { static: true }) screenRef: ElementRef;
  @ViewChild('parallax', { static: true }) parallaxRef: ElementRef;

  @Output() onExit = new EventEmitter<any>();

  public driver: Driver = null;
  public circuit: Circuit = null;
  public racer: Racer = null;

  public isLoading: boolean = true;

  public circuitBack: any = {};

  public objective = OBJECTIVE;
  public timeLimit: number = this.gameService.timeLimit;

  public isTouchScreen: boolean = this.controlsService.isTouchDevice;

  public jumpButtonPushed: boolean = false;

  constructor(private driverService: DriverService,
              private circuitService: CircuitService,
              private gameService: GameService,
              private raceService: RaceService,
              private controlsService: ControlsService) { }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
    this.raceService.clearRace();
  }

  ngOnInit(): void {
    this.subs.push(this.raceService.loadingState.subscribe(loading => {
      this.isLoading = loading;
    }));

    this.subs.push(this.raceService.racerState.subscribe(racer => {
      this.racer = racer;
    }));

    this.subs.push(this.controlsService.jumpPushedState.subscribe(pushed => {
      this.jumpButtonPushed = pushed;
    }));

    this.init();
  }

  private init() {
    this.driver = this.driverService.currentDriver;
    this.circuit = this.circuitService.currentCircuit;

    if(!this.driver || !this.circuit) {
      this.onExit.emit();
      return;
    }

    this.circuitBack = { background: this.circuit.bgColor };

    this.raceService.initRace(this.screenRef.nativeElement, this.parallaxRef.nativeElement);
  }

}
