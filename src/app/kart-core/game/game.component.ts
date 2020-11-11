import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Driver } from '../../shared/models/driver';
import { DriverService } from '../../shared/services/driver.service';
import { BindingsService } from '../../shared/services/bindings.service';
import { CircuitService } from '../../shared/services/circuit.service';
import { Circuit } from '../../shared/models/circuit';
import { Racer, RacerStatus, RotateDirection } from '../../shared/models/racer';
import { GameService } from '../../shared/services/game.service';
import { FooterService } from '../../shared/services/footer.service';
import { FooterAction } from '../../shared/models/footerBtn';
import { MathUtils } from 'three';
import { animate, style, transition, trigger } from '@angular/animations';
import { ResultAction } from '../../shared/models/racerResult';
import degToRad = MathUtils.degToRad;
import { MSG_TWITTER, URL_JOB } from '../../app.constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
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
export class GameComponent implements OnInit, OnDestroy {

  private CAMERA_HEIGHT = 8;

  @ViewChild('screen', { static: true }) screenRef: ElementRef;
  @ViewChild('parallax', { static: true }) parallaxRef: ElementRef;

  public driver: Driver = null;
  public circuit: Circuit = null;

  public isLoading: boolean = true;

  public racer: Racer = null;

  public circuitBack: any = {};

  public stereoEnabled: boolean = false;
  public accelerometer: any = null;

  public objective = 700;

  public parallaxInterval: number = -1;

  public parStyle: any = {};

  private beginTime: number = 0;
  public timeLimit: number = this.gameService.timeLimit;

  constructor(private driverService: DriverService,
              private circuitService: CircuitService,
              private gameService: GameService,
              private foooterService: FooterService,
              private bindingService: BindingsService) { }

  ngOnDestroy(): void {
    this.clearRace();
  }

  ngOnInit(): void {
    this.init();
  }

  private init() {

    this.driver = this.driverService.currentDriver;
    this.circuit = this.circuitService.currentCircuit;

    if(!this.driver || !this.circuit) {
      this.foooterService.setAction(FooterAction.driver);
      return;
    }

    this.clearRace();

    this.racer = null;
    this.isLoading = true;

    //mode7ctnr = document.getElementById('mode7ctnr');
    this.bindingService.setMode(window['cordova'] ? 'touchscreen' : 'keyboard');

    this.circuitBack = { background: this.circuit.bgColor };

    this.stereoEnabled = false;
    this.accelerometer = null;

    this.objective = 700;

    this.racer = new Racer({
      driver: this.driver,
      circuit: this.circuit,
      rotation: this.circuit.direction,
      x: this.circuit.startPosition.x,
      y: this.circuit.startPosition.y,
      z: this.CAMERA_HEIGHT,

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

    this.beginTime = new Date().getTime();
    this.racer.totalTime = 0;

    const sub = this.gameService.initScene(this.screenRef.nativeElement, this.racer).subscribe( () => {
      this.isLoading = false;
      this.initParallax();
      sub.unsubscribe();
    })
  }

  public backToChoice() {
    this.foooterService.setAction(FooterAction.driver);
  }

  public backToSite() {
    this.foooterService.setAction(FooterAction.exit);
  }

  private updateBackgroundRotation() {
    const moduloAngle = (this.racer.angle*180/Math.PI) % 360;
    const reducedWidth = this.racer.circuit.parallaxSizes.width / 360;

    this.racer.circuit.parallaxes.forEach((para) => {
      para.elem.style.transform = 'translate3d('+((para.speed * moduloAngle) * reducedWidth) + 'px, 0, 0)';
    });

  }

  private initParallax() {

    const $parallax = this.parallaxRef.nativeElement;
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

      //$para.className = "pixellated-background parallax-background";
      //$para.style.backgroundImage = "url('"+paralax.img+"')";
      //$para.style.transform = "translate3d(" + parallaxSizes.width * i + "px, 0, 0)";
      //$para.style.backgroundSize = parallaxSizes.width+"px "+parallaxSizes.height+"px";
      paralax.elem = $para;
      // $para.style.transition = 'transform 200ms linear';


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
    this.parallaxRef.nativeElement.innerHTML = "";
    clearInterval(this.parallaxInterval);
    this.gameService.clearRace();
  }

  public onResultAction(resultAction: ResultAction) {
    switch (resultAction) {
      case ResultAction.retry:
        this.init();
        break;
      case ResultAction.back_to_website:
        this.foooterService.setAction(FooterAction.exit);
        break;
      case ResultAction.go_to_jobs:
        window.open(URL_JOB, '_self');
        break;
      case ResultAction.tweet:
        this.tweet();
        break;
    }
  }

  private tweet() {
    window.open(MSG_TWITTER.split('||PTS||').join(''+this.racer.racerResult.totalPts), '_blank');
  }

}
