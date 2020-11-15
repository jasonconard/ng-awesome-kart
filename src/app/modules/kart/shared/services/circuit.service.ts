import { Injectable } from '@angular/core';
import { Circuit } from '../models/circuit';
import {
  BoxGeometry,
  DoubleSide,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh, MeshBasicMaterial,
  MeshPhongMaterial, NearestFilter, Object3D,
  PlaneGeometry, TextureLoader,
  Vector2
} from 'three';
import { forkJoin, Observable } from 'rxjs';
import { Building } from '../models/building';
import { Observer } from 'rxjs/internal/types';
import { ItemType, MoveType } from '../models/item';
import { RequestService } from './request.service';
import { RequestConfig } from '../models/requestConfig';
import { map } from 'rxjs/operators';
import { CircuitSprite } from '../models/circuitSprite';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  public circuits: Circuit[] = [];
  public currentCircuit: Circuit = null;

  constructor(private requestService: RequestService) { }


  public setCircuitList(circuits: any[]) {
    this.circuits = circuits;
    this.loadCircuitData(circuits[0].link).subscribe( circuit => {
      this.currentCircuit = circuit;
    });
  }

  public loadCircuitData(link: string): Observable<Circuit> {
    const requestConfig = new RequestConfig('GET', link);
    return this.requestService.doRequest(requestConfig).pipe(map(res => {
      res.body.items.forEach(item => {
        item.move.type = MoveType[item.move.type];
        item.type = ItemType[item.type.toLowerCase()];
        item.pos.y = -item.pos.y;
        if(item.move) {
          item.move.i = 0;
          item.move.sense = false;

          if(item.move.path) {
            item.move.path.forEach( path => {
              path.y = -path.y;
            });
          }

          if(item.move.goY) {
            item.move.goY = -item.move.goY;
          }
        }
      });
      return res.body;
    }));
  }

  public getGroundValue(x: number, y: number) {
    if(this.currentCircuit && this.currentCircuit.mapGrounds.length && x && y){
      return this.currentCircuit.mapGrounds[Math.round(x)][Math.round(y)];
    } else {
      return 0;
    }
  }

  public loadBuildings(): Observable<Building[]> {
    return new Observable<Building[]>( (observer: Observer<Building[]>) => {
      this.currentCircuit.buildings.forEach(building => {

        const geometry = new BoxGeometry( building.sizeX, building.sizeY, building.height );
        const material = new MeshPhongMaterial( {
          color: building.color,
          polygonOffset: true,
          polygonOffsetFactor: 1, // positive value pushes polygon further away
          polygonOffsetUnits: 1
        } );

        material.transparent = building.opacity < 1;
        material.opacity = building.opacity;

        building.obj = new Mesh( geometry, material );

        const geo = new EdgesGeometry( geometry ); // or WireframeGeometry
        const mat = new LineBasicMaterial( { color: building.color, linewidth: 4 } );
        const wireframe = new LineSegments( geo, mat );
        building.obj.add( wireframe );

        building.obj.position.x = building.x;
        building.obj.position.y = -building.y;

      });

      observer.next(this.currentCircuit.buildings);
      observer.complete();
    });
  }

  public loadSprites(): Observable<CircuitSprite[]> {
    const spritesKeys = Object.keys(this.currentCircuit.sprites);
    return forkJoin(spritesKeys.map(spriteKey => {
      const sprite = this.currentCircuit.sprites[spriteKey];

      const loader = new TextureLoader();
      return new Observable<CircuitSprite>( (observer: Observer<CircuitSprite>) => {
        loader.load(sprite.texfile, spriteTex => {
          if(spriteTex) {
            spriteTex.magFilter = NearestFilter;
            spriteTex.minFilter = NearestFilter;
            const texMaterial = new MeshBasicMaterial({
              map: spriteTex,
              side: DoubleSide
            });

            const trackMapping = [
              new Vector2(0,1),
              new Vector2(0,0),
              new Vector2(1,0),
              new Vector2(1,1)
            ];


            texMaterial.transparent = true;
            const texGeometry = new PlaneGeometry( sprite.width, sprite.height, 1, 1);
            texGeometry.faceVertexUvs[0][0] = [ trackMapping[0], trackMapping[1], trackMapping[3] ];
            texGeometry.faceVertexUvs[0][1] = [ trackMapping[1], trackMapping[2], trackMapping[3] ];

            const plane = new Mesh( texGeometry, texMaterial );
            plane.position.x = 0;
            plane.position.y = 0;
            plane.position.z = 0;

            plane.rotation.x = Math.PI / 2.;

            sprite.obj = plane;

            sprite.positions.forEach(position => {
              position.obj = sprite.obj.clone();
              position.obj.position.set(position.x, -position.y, sprite.height/2.);
              if(position.ry) {
                position.obj.rotation.y = position.ry;
              }
            });

            observer.next(sprite);
            observer.complete();
          }
        });
      });

    }));
  }

  public loadItems(): Observable<Object3D[]> {

    return forkJoin(this.currentCircuit.items.map((item) => {

      return new Observable<Object3D>( (observer: Observer<Object3D>) => {
        const loader = new TextureLoader();
        loader.load(item.img, itemTex => {
          //item.obj = item.buildItem(itemTex);

          const group = new Object3D();
          //group.items = {};


          if(itemTex) {
            itemTex.magFilter = NearestFilter;
            itemTex.minFilter = NearestFilter;
            const texMaterial = new MeshBasicMaterial({
              map: itemTex,
              side: DoubleSide
            });

            const trackMapping = [
              new Vector2(0,1),
              new Vector2(0,0),
              new Vector2(1,0),
              new Vector2(1,1)
            ];

            texMaterial.transparent = true;

            const texGeometry = new PlaneGeometry( 5, 5, 1, 1);
            texGeometry.faceVertexUvs[0][0] = [ trackMapping[0], trackMapping[1], trackMapping[3] ];
            texGeometry.faceVertexUvs[0][1] = [ trackMapping[1], trackMapping[2], trackMapping[3] ];

            const plane = new Mesh( texGeometry, texMaterial );
            plane.position.x = 0;
            plane.position.y = 0;
            plane.position.z = 0;
            group.add(plane);

            //group.items.plane = plane;
          }

          let texColor = 0xcb2468;
          switch(item.type) {
            case ItemType.malus:
              texColor = 0xff0000;
              break;
            case ItemType.bonus:
              texColor = 0xcb2468;
              break;
            case ItemType.super_bonus:
              texColor = 0xe8d744;
              break;
            case ItemType.invert:
            case ItemType.slow:
            case ItemType.speed:
              texColor = 0x444444;
              break;
          }

          const geometry = new BoxGeometry( 5, 5, 5 );
          const material = new MeshBasicMaterial( {color: texColor} );
          material.transparent = true;
          material.opacity = 0.4;
          const cube = new Mesh( geometry, material );

          group.add(cube);

          //group.items.cube = cube;

          group.position.x = item.pos.x;
          group.position.y = item.pos.y;

          group.position.z = 3;

          group.rotation.x = Math.PI/2;

          item.obj = group;

          item.available = true;

          if(item.move) {
            item.move.i = 0;
            item.move.sense = false;
          }

          item.tempPos = { ...item.pos };

          observer.next(group);
          observer.complete();
        });
      });
    }));
  }

  public loadCircuit(): Observable<Circuit>{
    return new Observable<Circuit>( (observer: Observer<Circuit>) => {

      const mgi = new Image();
      mgi.addEventListener('load', () => {
        let mgc = document.createElement("canvas");
        let mgctx = mgc.getContext("2d");
        mgc.width = mgi.width;
        mgc.height = mgi.height;
        mgctx.drawImage(mgi, 0, 0);

        let mgData = mgctx.getImageData(0,0,mgc.width, mgc.height).data;
        this.currentCircuit.mapGrounds = [];
        for(let i = 0; i < mgi.width; i++) {
          this.currentCircuit.mapGrounds[i] = [];
          for(let j = 0; j < mgi.height; j++){
            let index = (j * (mgi.width*4)) + (i * 4);
            this.currentCircuit.mapGrounds[i][j] = mgData[index] / 255.;
          }
        }

        mgc = null;
        mgctx = null;
        mgData = null;

        this.currentCircuit.width = mgi.width;
        this.currentCircuit.height = mgi.height;

        const loader = new TextureLoader();
        loader.load(
          this.currentCircuit.map, tex => {


            tex.magFilter = NearestFilter;
            tex.minFilter = NearestFilter;
            const material = new MeshBasicMaterial({
              map: tex
            });


            const trackMapping = [
              new Vector2(0,1),
              new Vector2(0,0),
              new Vector2(1,0),
              new Vector2(1,1)
            ];

            const geometry = new PlaneGeometry( this.currentCircuit.width, this.currentCircuit.height, 1, 1);
            geometry.faceVertexUvs[0][0] = [ trackMapping[0], trackMapping[1], trackMapping[3] ];
            geometry.faceVertexUvs[0][1] = [ trackMapping[1], trackMapping[2], trackMapping[3] ];

            const plane = new Mesh( geometry, material );
            plane.position.x = this.currentCircuit.width/2;
            plane.position.y = -this.currentCircuit.height/2;

            this.currentCircuit.three.tex = tex;
            this.currentCircuit.three.material = material;
            this.currentCircuit.three.geometry = geometry;
            this.currentCircuit.three.mesh = plane;

            this.requestService.getBlob(this.currentCircuit.background).subscribe( blob => {
              this.currentCircuit.backgroundBlobUrl = window.URL.createObjectURL(blob);
              const image = new Image();
              image.addEventListener('load', () => {
                this.currentCircuit.backgroundImage = image;
                observer.next(this.currentCircuit);
                observer.complete();
              });
              image.src = this.currentCircuit.backgroundBlobUrl;
            });


          }, () => {}, () => { observer.error(''); }
        );
      });
      mgi.addEventListener('error', () => {
        observer.error('');
      });
      mgi.src = this.currentCircuit.normales;
    });
  }

}
