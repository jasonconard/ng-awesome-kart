import { Injectable } from '@angular/core';
import { DriftFire, MoveAction, Racer, RACER_PICS, RacerStatus, RotateDirection } from '../models/racer';
import { DirectionalLight, MathUtils, PerspectiveCamera, Scene, Vector2, Vector3, WebGLRenderer } from 'three';
import { forkJoin, fromEvent, Observable, Observer, Subject, Subscription } from 'rxjs';
import { CircuitService } from './circuit.service';
import { map } from 'rxjs/operators';
import { RacerService } from './racer.service';
import { ItemService } from './item.service';
import { ControlsService } from './controls.service';
import { CAMERA_BACK, CAMERA_FOCUS, CAMERA_HEIGHT, CAMERA_MAX, CLIPPING_DIST } from '../../kart.constants';
import { Race } from '../models/race';
import { RaceResult } from '../models/raceResult';
import degToRad = MathUtils.degToRad;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private resultSubject = new Subject<RaceResult>();
  public resultState = this.resultSubject.asObservable();

  private resizeSub: Subscription = null;

  private container: HTMLElement;

  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  //private stereoEffect: StereoEffect;

  private threeCanvas: HTMLElement;

  private race: Race;

  private backgroundRefreshInterval: number = -1;
  private physicsInterval: number = -1;
  private currentTime: number = 0;
  private lastTime: number = 0;
  private beginTime: number = 0;
  private fps: number = 0;
  private fpsTable: number[] = [];

  private shake: number = 0;

  //private stereoEnabled: boolean = false;

  private animation: number;

  public playerName: string = "";

  constructor(private racerService: RacerService,
              private itemService: ItemService,
              private controlsService: ControlsService,
              private circuitService: CircuitService) { }

  setPlayerName(playerName: string) {
    this.playerName = playerName;
  }

  initScene(container: HTMLElement, race: Race): Observable<Race> {
    return new Observable<Race>( (observer: Observer<Race>) => {

      this.container = container;
      this.race = race;

      this.beginTime = new Date().getTime();

      this.camera = new PerspectiveCamera(100, this.container.clientWidth / this.container.clientHeight, 1, CAMERA_MAX);
      this.camera.position.set(0, 0, race.player.z);
      this.camera.up = new Vector3(0,0,1);
      this.camera.lookAt(new Vector3(0, CAMERA_FOCUS, 0));

      const directionalLight = new DirectionalLight( 0xffffff, 0.9 );
      directionalLight.position.y = -750;
      directionalLight.position.z = 1500;
      directionalLight.position.x = 750;

      this.scene = new Scene();
      this.scene.add( directionalLight );

      if(this.resizeSub) {
        this.resizeSub.unsubscribe();
      }
      this.resizeSub = fromEvent(window, 'resize').subscribe( () => {
        this.onWindowResize();
      });

      this.loadResources().subscribe( () => {
        this.renderer = new WebGLRenderer({ alpha: true });

        this.renderer.setSize( container.clientWidth, container.clientHeight );

        //this.stereoEffect = new StereoEffect( this.renderer );
        //this.stereoEffect.setEyeSeparation(1);
        //this.stereoEffect.setSize( container.clientWidth, container.clientHeight );

        this.threeCanvas = this.renderer.domElement;

        container.appendChild( this.threeCanvas );
        this.threeCanvas.style.zIndex = '13';

        this.controlsService.bindTouching(this.threeCanvas);

        this.startAnimate();

        observer.next(this.race);
        observer.complete();
      });
    });
  }

  private onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
  }

  private loadResources(): Observable<any> {

    const loadingObs: Observable<any>[] = [];

    loadingObs.push(this.circuitService.loadCircuit().pipe( map( circuit => {
      this.scene.add(circuit.three.mesh);
      this.scene.add(circuit.background3d.mesh);
    })));

    loadingObs.push(this.circuitService.loadItems().pipe( map( objs => {
      objs.forEach( obj =>{
        this.scene.add(obj);
      });
    })));

    loadingObs.push(this.circuitService.loadBuildings().pipe( map(buildings => {
      buildings.forEach(building => {
        this.scene.add(building.obj);
      });
    })));

    loadingObs.push(this.circuitService.loadSprites().pipe(map(sprites =>{
      sprites.forEach(sprite => {
        sprite.positions.forEach(position =>{
          this.scene.add(position.obj);
        });
      });
    })));

    loadingObs.push(this.racerService.loadDesignElement(this.race.player).pipe( map(design => {
      this.scene.add(design.obj);
    })));


    return forkJoin(loadingObs);
  }

  private startAnimate() {

    if(this.physicsInterval >= 0) {
      clearInterval(this.physicsInterval);
      this.physicsInterval = -1;
    }

    this.physicsInterval = setInterval( () => {
      this.updatePhysics();
    }, 1000/60);

    this.animate();
  }

  private animate() {

    this.shake = ((this.shake+1) % 10); // shake is used for drifting animation

    this.computeFPS();
    this.animatePlayer();
    this.animateItems();

    //if(this.stereoEnabled){
    //  this.stereoEffect.render( this.scene, this.camera );
    //} else {
    this.renderer.render( this.scene, this.camera );
    //}

    if(!this.isGameFinished()) {
      this.animation = requestAnimationFrame( () => { this.animate() } );
    } else {
      this.sendResult();
    }
  }

  private isGameFinished(){
    return this.race.player.turn >= this.race.rules.turns;
  }

  private sendResult() {
    const finalPoints = this.race.player.points + this.race.rules.time - this.race.time;
    const bonusTime = (this.race.rules.time - this.race.time) * this.race.rules.timeValue;

    this.race.result = {
      itemNb: this.race.player.totalItems.length,
      itemPts: this.race.player.points,
      timePts: bonusTime,
      totalPts:finalPoints,
      raceTime: this.race.time,
      objectiveTime: this.race.rules.time,
      objectivePts: this.race.rules.pts
    };

    this.resultSubject.next(this.race.result);
  }

  private computeFPS() {
    this.currentTime = new Date().getTime();
    const total = this.currentTime - this.lastTime;
    this.lastTime = this.currentTime;
    this.race.time = Math.round((this.currentTime - this.beginTime) / 1000);

    this.fps = Math.round(1000/total);
    if(this.fpsTable.length >= 100) {
      this.fpsTable.splice(0,1);
    }
    this.fpsTable.push(this.fps);

    const sumFPS = this.fpsTable.reduce((lastVal, newVal) => {
      return lastVal + newVal;
    }, 0);

    this.race.fps = Math.floor(sumFPS / this.fpsTable.length);
  }

  private animatePlayer() {

    const player = this.race.player;

    const driverObj = player.design.obj;
    const driverPlane = player.design.plane;

    if(driverObj){
      const angle = degToRad(player.rotation-90);

      driverObj.position.x = player.x + (-2*Math.cos(angle));
      driverObj.position.y = -player.y + (-2*Math.sin(angle));


      driverPlane.rotation.y = degToRad(player.rotation-180);

      this.camera.position.x = driverObj.position.x + (CAMERA_BACK * Math.cos(angle));
      this.camera.position.y = driverObj.position.y + (CAMERA_BACK * Math.sin(angle));


      const lookAt = {
        x: driverObj.position.x + (CAMERA_FOCUS * Math.cos(angle)),
        y: driverObj.position.y + (CAMERA_FOCUS * Math.sin(angle)),
        z: player.z - CAMERA_HEIGHT
      };

      const driftingValue = +(player.status === RacerStatus.drifting);
      driverObj.position.x += driftingValue * (+(this.shake>5)) * 0.1;

      this.camera.lookAt(new Vector3(lookAt.x, lookAt.y, lookAt.z));

    }
  }

  private animateItems() {
    this.race.circuit.items.forEach((item) =>{
      if(item.obj){

        if(item.available) {
          item.obj.rotation.x += 0.05;
          item.obj.rotation.y += 0.05;

          this.itemService.nextFrame(item)
          item.obj.position.x = item.tempPos.x;
          item.obj.position.y = item.tempPos.y;

          const dist = GameService.getDist2D(item.obj.position, this.camera.position);
          const visible = dist < CLIPPING_DIST;

          item.obj.visible = item.available && visible;
        } else {
          item.obj.visible = false;
        }
      }
    });
  }

  private updatePhysics(){
    const player = this.race.player;
    this.updateActions(player);
    this.updateSprites(player);
  }

  private updateActions(player: Racer) {

    const actions = this.controlsService.getAction();

    if(actions[MoveAction.go_backward]) {
      this.racerService.move(player, MoveAction.go_backward);
    }
    if(actions[MoveAction.go_forward]) {
      this.racerService.move(player, MoveAction.go_forward);
    }
    if(actions[MoveAction.no_move]) {
      this.racerService.move(player, MoveAction.no_move);
      this.racerService.cancelDrift(player);
    }

    if(actions[MoveAction.turn_left]){
      this.racerService.rotate(player, RotateDirection.left);
    }
    if(actions[MoveAction.turn_right]){
      this.racerService.rotate(player, RotateDirection.right);
    }
    if(actions[MoveAction.no_turn]){
      this.racerService.rotate(player, RotateDirection.front);
    }

    if(actions[MoveAction.jump]){
      this.racerService.jump(player);
    } else {
      this.racerService.driftTurbo(player);
    }

    this.defineDriverMaterial(actions);
  }

  private updateSprites(player: Racer) {
    const spriteRotation = degToRad(player.rotation - 180);
    const circuitSpritesKeys = Object.keys(this.race.circuit.sprites);

    // Update sprites rotation and clipping with camera view angle
    circuitSpritesKeys.forEach( spriteKey => {
      const sprite = this.race.circuit.sprites[spriteKey];
      sprite.positions.forEach(position => {
        const dist = GameService.getDist2D( new Vector2(position.x, -position.y), this.camera.position);
        if(sprite.obj) {
          position.obj.visible = dist < CLIPPING_DIST;
          if(sprite.autorotate) {
            position.obj.rotation.y = spriteRotation;
          }
        }
      });
    });
  }

  // TODO Stereo feature for cardboard
  //public activateStereo() {
    //this.stereoEnabled = !this.stereoEnabled;


    //if(!this.stereoEnabled){
    //this.controlsService.setMode(window['cordova'] ? ControlsType.touchscreen : ControlsType.keyboard);
    //this.renderer.setSize( window.innerWidth, window.innerHeight );
    //} else {
    //  this.controlsService.setMode(ControlsType.cardboard);
    //}

  //}

  private defineDriverMaterial(actions){
    const player = this.race.player;

    let racerPic: Vector2 = RACER_PICS.GO_FORWARD;

    if(player.status === RacerStatus.drifting){

      const frameValue: number = this.shake > 6 ? 2 : (this.shake < 3 ? 0 : 1);

      const fire = this.racerService.getDriftingFire(player, this.currentTime);
      switch (player.driftDirection) {
        case RotateDirection.left: {
          switch (fire) {
            case DriftFire.none: {
              switch(frameValue) {
                case 0: racerPic = RACER_PICS.DRIFT_LEFT_SMOKE; break;
                case 1: racerPic = RACER_PICS.DRIFT_LEFT_SMOKE2; break;
                case 2: racerPic = RACER_PICS.DRIFT_LEFT_SMOKE3; break;
              }
              break;
            }

            case DriftFire.red: {
              switch(frameValue) {
                case 0: racerPic = RACER_PICS.DRIFT_LEFT_RED; break;
                case 1: racerPic = RACER_PICS.DRIFT_LEFT_RED2; break;
                case 2: racerPic = RACER_PICS.DRIFT_LEFT_RED3; break;
              }
              break;
            }
            case DriftFire.blue: {
              switch(frameValue) {
                case 0: racerPic = RACER_PICS.DRIFT_LEFT_BLUE; break;
                case 1: racerPic = RACER_PICS.DRIFT_LEFT_BLUE2; break;
                case 2: racerPic = RACER_PICS.DRIFT_LEFT_BLUE3; break;
              }
              break;
            }
          }
          break;
        }
        case RotateDirection.right: {
          switch (fire) {
            case DriftFire.none: {
              switch(frameValue) {
                case 0: racerPic = RACER_PICS.DRIFT_RIGHT_SMOKE; break;
                case 1: racerPic = RACER_PICS.DRIFT_RIGHT_SMOKE2; break;
                case 2: racerPic = RACER_PICS.DRIFT_RIGHT_SMOKE3; break;
              }
              break;
            }
            case DriftFire.red: {
              switch(frameValue) {
                case 0: racerPic = RACER_PICS.DRIFT_RIGHT_RED; break;
                case 1: racerPic = RACER_PICS.DRIFT_RIGHT_RED2; break;
                case 2: racerPic = RACER_PICS.DRIFT_RIGHT_RED3; break;
              }
              break;
            }
            case DriftFire.blue: {
              switch(frameValue) {
                case 0: racerPic = RACER_PICS.DRIFT_RIGHT_BLUE; break;
                case 1: racerPic = RACER_PICS.DRIFT_RIGHT_BLUE2; break;
                case 2: racerPic = RACER_PICS.DRIFT_RIGHT_BLUE3; break;
              }
              break;
            }
          }
          break;
        }
      }

    } else {
      if(actions[MoveAction.turn_left]){
        racerPic = player.speed ? RACER_PICS.TURN_LEFT : RACER_PICS.SEE_LEFT;
      } else if(actions[MoveAction.turn_right]){
        racerPic = player.speed ? RACER_PICS.TURN_RIGHT : RACER_PICS.SEE_RIGHT;
      }
    }

    this.racerService.updateRacerPic(player, racerPic);
  }

  public clearRace(){
    if(this.animation){
      cancelAnimationFrame(this.animation);
      this.animation = null;
    }

    if(this.physicsInterval >= 0) {
      clearInterval(this.physicsInterval);
    }

    if(this.backgroundRefreshInterval >= 0) {
      clearInterval(this.backgroundRefreshInterval);
    }

    if(this.threeCanvas) {
      this.container.removeChild(this.threeCanvas);
      this.threeCanvas = null;
    }

    this.container = null;
    this.camera = null;
    this.scene = null;
    this.renderer = null;
    //this.stereoEffect = null;
    this.race = null;

    this.backgroundRefreshInterval = -1;
    this.physicsInterval = -1;
    this.currentTime = 0;
    this.lastTime = 0;
    this.beginTime = 0;
    this.fps = 0;
    this.fpsTable = [];

    this.shake = 0;

    //this.stereoEnabled = false;

    this.animation = 0;

  }

  private static getDist2D(a: Vector2 | Vector3, b: Vector2 | Vector3): number {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }
}
