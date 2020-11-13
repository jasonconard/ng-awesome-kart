import { Injectable } from '@angular/core';
import { DriftFire, MoveAction, Racer, RACER_PICS, RacerStatus, RotateDirection } from '../models/racer';
import { DirectionalLight, PerspectiveCamera, Scene, Vector2, Vector3, WebGLRenderer } from 'three';
import { forkJoin, fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect';
import { BindingsService } from './bindings.service';
import { CircuitService } from './circuit.service';
import { map } from 'rxjs/operators';
import { RacerService } from './racer.service';
import { ItemService } from './item.service';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private resizeSub: Subscription = null;

  private CAMERA_FOCUS = 80;
  private CAMERA_MAX = 2500;
  private CAMERA_BACK = -8;

  private container: HTMLElement;

  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private stereoEffect: StereoEffect;

  private threeCanvas: HTMLElement;

  private racer: Racer;

  private backgroundRefreshInterval: number = -1;
  private physicsInterval: number = -1;
  private currentTime: number = 0;
  private lastTime: number = 0;
  private totalTime: number = 0;
  private beginTime: number = 0;
  private fps: number = 0;
  private fpsTable: number[] = [];

  private shake: number = 0;


  private stereoEnabled: boolean = false;

  private finished: boolean;
  private controllerClosed: boolean;
  private animation: number;

  private finalPoints: number;
  public timeLimit: number = 90;
  private bonusTime: number;
  private objective: number = 700;
  private lose: boolean;
  private win: boolean;

  public playerName: string = "";

  constructor(private bindingsService: BindingsService,
              private racerService: RacerService,
              private itemService: ItemService,
              private circuitService: CircuitService) { }

  setPlayerName(playerName: string) {
    this.playerName = playerName;
  }

  initScene(container: HTMLElement, racer: Racer): Observable<Racer> {
    return new Observable<Racer>( (observer: Observer<Racer>) => {

      this.container = container;
      this.racer = racer;

      this.beginTime = new Date().getTime();

      this.camera = new PerspectiveCamera(100, this.container.clientWidth / this.container.clientHeight, 1, this.CAMERA_MAX);
      this.camera.position.set(0, 0, racer.z);
      this.camera.up = new Vector3(0,0,1);
      this.camera.lookAt(new Vector3(0, this.CAMERA_FOCUS, 0));

      if(this.resizeSub) {
        this.resizeSub.unsubscribe();
      }
      this.resizeSub = fromEvent(window, 'resize').subscribe( () => {
        this.onWindowResize();
      });

      // setInterval( () => {
      //   console.log('(' + this.camera.position.x + ', ' + this.camera.position.y + ')');
      // }, 400);

      const directionalLight = new DirectionalLight( 0xffffff, 0.9 );
      directionalLight.position.y = -750;
      directionalLight.position.z = 1500;
      directionalLight.position.x = 750;

      this.scene = new Scene();
      this.scene.add( directionalLight );

      this.loadResources().subscribe( () => {
        this.renderer = new WebGLRenderer({ alpha: true });

        this.renderer.setSize( container.clientWidth, container.clientHeight );

        this.stereoEffect = new StereoEffect( this.renderer );
        this.stereoEffect.setEyeSeparation(1);
        this.stereoEffect.setSize( container.clientWidth, container.clientHeight );

        this.threeCanvas = this.renderer.domElement;

        container.appendChild( this.threeCanvas );
        this.threeCanvas.style.zIndex = '13';

        this.bindingsService.bindTouching(this.threeCanvas);

        this.startAnimate();

        observer.next(this.racer);
        observer.complete();
      });
    });
  }

  private onWindowResize() {
    //window.addEventListener( 'resize', onWindowResize, false );

    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );

  }

  private loadResources(): Observable<any> {

    const loadingObs: Observable<any>[] = [];

    loadingObs.push(this.circuitService.loadCircuit().pipe( map( circuit => {
      this.scene.add(circuit.three.mesh);
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

    loadingObs.push(this.racerService.loadDesignElement(this.racer).pipe( map(design => {
      this.scene.add(design.obj);
    })));


    return forkJoin(loadingObs);
  }

  private startAnimate() {

    if(this.physicsInterval >= 0) {
      clearInterval(this.physicsInterval);
      this.physicsInterval = -1;
    }
    //if(this.backgroundRefreshInterval >= 0){
    //  clearInterval(this.backgroundRefreshInterval)
    //  this.backgroundRefreshInterval = -1;
    //}

    this.physicsInterval = setInterval( () => {
      this.updatePhysics();
    }, 1000/60);
    //this.backgroundRefreshInterval = setInterval( () => {
    //  this.updateBackgroundRotation();
    //}, 1000/60);


    this.animate();
  }

  private animate() {
    this.shake = ((this.shake+1) % 10);

    this.currentTime = new Date().getTime();
    const total = this.currentTime - this.lastTime;
    this.lastTime = this.currentTime;
    this.totalTime = Math.round((this.currentTime - this.beginTime) / 1000);
    this.racer.totalTime = this.totalTime;

    this.fps = Math.round(1000/total);
    if(this.fpsTable.length >= 100) {
      this.fpsTable.splice(0,1);
    }
    this.fpsTable.push(this.fps);

    const sumFPS = this.fpsTable.reduce((lastVal, newVal) => {
      return lastVal + newVal;
    }, 0);

    this.racer.fps = Math.floor(sumFPS / this.fpsTable.length);

    const driverObj = this.racer.design.obj;
    const driverPlane = this.racer.design.plane;

    if(driverObj){
      const angle = (this.racer.rotation-90) * Math.PI / 180;

      driverObj.position.x = this.racer.x + (-2*Math.cos(angle));
      driverObj.position.y = -this.racer.y + (-2*Math.sin(angle));


      driverPlane.rotation.y = (this.racer.rotation-180) * Math.PI / 180;

      this.camera.position.x = driverObj.position.x + (this.CAMERA_BACK * Math.cos(angle));
      this.camera.position.y = driverObj.position.y + (this.CAMERA_BACK * Math.sin(angle));


      const lookAt = {
        x: driverObj.position.x + (this.CAMERA_FOCUS * Math.cos(angle)),
        y: driverObj.position.y + (this.CAMERA_FOCUS * Math.sin(angle)),
        z: this.racer.z - 8
      };

      const driftingValue = +(this.racer.status === RacerStatus.drifting);
      driverObj.position.x += driftingValue * (+(this.shake>5)) * 0.1;

      this.camera.lookAt(new Vector3(lookAt.x, lookAt.y, lookAt.z));

    }

    this.racer.circuit.items.forEach((item) =>{
      if(item.obj){

        if(item.available) {
          item.obj.rotation.x += 0.05;
          item.obj.rotation.y += 0.05;


          this.itemService.nextFrame(item)
          item.obj.position.x = item.tempPos.x;
          item.obj.position.y = item.tempPos.y;

          const dist = Math.sqrt(Math.pow(item.obj.position.x - this.camera.position.x, 2) + Math.pow(item.obj.position.y - this.camera.position.y, 2));

          const visible = dist < 300;

          item.obj.visible = item.available && visible;
        } else {
          item.obj.visible = false;
        }
      }
    });

    if(this.stereoEnabled){
      this.stereoEffect.render( this.scene, this.camera );
    } else {
      this.renderer.render( this.scene, this.camera );
    }


    this.finished = this.isGameFinished();

    if(!this.finished && !this.controllerClosed) {
      this.animation = requestAnimationFrame( () => { this.animate() } );
    } else {

      this.finalPoints = this.racer.points + this.timeLimit - this.totalTime;
      this.bonusTime = this.timeLimit - this.totalTime;

      this.racer.racerResult = {
        itemNb: this.racer.totalItems.length,
        itemPts: this.racer.points,
        timePts: this.bonusTime,
        totalPts: this.finalPoints,
        raceTime: this.totalTime,
        objectiveTime: this.timeLimit,
        objectivePts: this.objective
      };

      if(this.finalPoints < this.objective){
        this.lose = true;
      } else {
        this.win = true;
      }

      // Set score in a cookie to send by mail
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 3);
      CookieService.setCookie('score', this.finalPoints.toString(), expireDate, '/');

    }
  }

  private updatePhysics(){

    var actions = this.bindingsService.getAction();


    if(actions[MoveAction.go_backward]) {
      this.racerService.move(this.racer, MoveAction.go_backward);
    }
    if(actions[MoveAction.go_forward]) {
      this.racerService.move(this.racer, MoveAction.go_forward);
    }
    if(actions[MoveAction.no_move]) {
      this.racerService.move(this.racer, MoveAction.no_move);
      this.racerService.cancelDrift(this.racer);
    }

    if(actions[MoveAction.turn_left]){
      this.racerService.rotate(this.racer, RotateDirection.left);
    }
    if(actions[MoveAction.turn_right]){
      this.racerService.rotate(this.racer, RotateDirection.right);
    }
    if(actions[MoveAction.no_turn]){
      this.racerService.rotate(this.racer, RotateDirection.front);
    }

    this.defineDriverMaterial(actions);

    if(actions[MoveAction.jump]){
      this.racerService.jump(this.racer);
    } else {
      this.racerService.driftTurbo(this.racer);
    }

    const spriteRotation = (this.racer.rotation-180) * Math.PI / 180;
    const circuitSpritesKeys = Object.keys(this.racer.circuit.sprites);

    circuitSpritesKeys.forEach( spriteKey => {
      const sprite = this.racer.circuit.sprites[spriteKey];
      sprite.positions.forEach(position => {
        const dist = Math.sqrt(Math.pow(position.x - this.camera.position.x, 2) + Math.pow(-position.y - this.camera.position.y, 2));
        if(sprite.obj) {
          position.obj.visible = dist < 300;
          if(sprite.autorotate) {
            position.obj.rotation.y = spriteRotation;
          }
        }
      });
    });
  }

  private isGameFinished(){
    return this.racer.turn >= 1;
  }

  public activateStereo() {
    this.stereoEnabled = !this.stereoEnabled;

    if(!this.stereoEnabled){
      this.bindingsService.setMode(window['cordova'] ? 'touchscreen' : 'keyboard');
      this.renderer.setSize( window.innerWidth, window.innerHeight );
    } else {
      this.bindingsService.setMode('cardboard');
    }

  }

  public defineDriverMaterial(actions){

    let racerPic: Vector2 = RACER_PICS.GO_FORWARD;

    if(this.racer.status === RacerStatus.drifting){

      const frameValue: number = this.shake > 6 ? 2 : (this.shake < 3 ? 0 : 1);

      const fire = this.racerService.getDriftingFire(this.racer, this.currentTime);
      switch (this.racer.driftDirection) {
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
        racerPic = this.racer.speed ? RACER_PICS.TURN_LEFT : RACER_PICS.SEE_LEFT;
      } else if(actions[MoveAction.turn_right]){
        racerPic = this.racer.speed ? RACER_PICS.TURN_RIGHT : RACER_PICS.SEE_RIGHT;
      }
    }




    this.racerService.updateRacerPic(this.racer, racerPic);
  }

  public clearRace(){
    if(this.animation){
      cancelAnimationFrame(this.animation);
      this.animation = null;
    }

    this.finished = true;

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
    this.stereoEffect = null;
    this.racer = null;


    this.backgroundRefreshInterval = -1;
    this.physicsInterval = -1;
    this.currentTime = 0;
    this.lastTime = 0;
    this.totalTime = 0;
    this.beginTime = 0;
    this.fps = 0;
    this.fpsTable = [];

    this.shake = 0;


    this.stereoEnabled = false;

    this.finished = false;
    //this.controllerClosed: boolean;
    this.animation = 0;

    this.finalPoints = 0;
    this.timeLimit = 90;
    this.bonusTime = 0
    this.objective = 700;
    this.lose = false;
    this.win = false;

  }

  private setBinding(type, value){
    this.bindingsService.setBind(type, value);
  }

}
