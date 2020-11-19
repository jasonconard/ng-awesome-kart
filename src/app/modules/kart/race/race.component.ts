import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { DriverService } from '../shared/services/driver.service';
import { CircuitService } from '../shared/services/circuit.service';
import { GameService } from '../shared/services/game.service';
import { ControlsService } from '../shared/services/controls.service';
import { RaceService } from '../shared/services/race.service';
import { Race } from '../shared/models/race';
import { Rules } from '../shared/models/rules';

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

  @Output() onExit = new EventEmitter<any>();

  @Input() rules: Rules = null;

  public race: Race = null;

  public isLoading: boolean = true;

  public circuitBack: any = {};

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
    if(!this.rules) {
      // Fallback rules
      this.rules = {
        pts: 700,
        time: 90,
        timeValue: 2,
        turns: 1,
        difficulty: 180
      }
    }

    this.subs.push(this.raceService.loadingState.subscribe(loading => {
      this.isLoading = loading;
    }));

    this.subs.push(this.raceService.raceState.subscribe(race => {
      this.race = race;
    }));

    this.subs.push(this.controlsService.jumpPushedState.subscribe(pushed => {
      this.jumpButtonPushed = pushed;
    }));

    this.init();
  }

  private init() {
    const driver = this.driverService.currentDriver;
    const circuit = this.circuitService.currentCircuit;

    if(!driver || !circuit) {
      this.onExit.emit();
      return;
    }

    this.circuitBack = { background: circuit.bgColor };

    this.raceService.initRace(this.screenRef.nativeElement, this.rules);
  }

}
