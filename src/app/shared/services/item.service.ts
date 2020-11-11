import { Injectable } from '@angular/core';
import { Item, MoveType } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public nextFrame(item: Item) {
    switch (item.move.type){
      case MoveType.stay: this.stay(item); break;
      case MoveType.comeback: this.comeback(item); break;
      case MoveType.path: this.path(item); break;
    }
    return this;
  }

  public stay(item: Item){
    item.tempPos.x = item.pos.x;
    item.tempPos.y = item.pos.y;
  }

  public comeback(item: Item){
    const move = item.move;
    move.i = move.i || 0;

    if(move.sense) {
      if(move.i < move.iterations){
        item.tempPos.x -= (move.goX - item.pos.x)/move.iterations;
        item.tempPos.y -= (move.goY - item.pos.y)/move.iterations;
        move.i++;
      } else {
        move.i = 0;
        move.sense = false;
      }
    } else {
      if(move.i < move.iterations){
        item.tempPos.x += (move.goX - item.pos.x)/move.iterations;
        item.tempPos.y += (move.goY - item.pos.y)/move.iterations;
        move.i++;
      } else {
        move.i = 0;
        move.sense = true;
      }
    }
  }

  public path(item: Item){
    const move = item.move;
    move.i = move.i || 0;

    if(move.iterations && move.path.length){
      const idOrig = Math.floor(move.i/ (move.iterations/move.path.length));

      const idNext = (idOrig+1) % move.path.length;

      const orig = move.path[idOrig];
      const next = move.path[idNext];

      item.tempPos.x += move.path.length * (next.x - orig.x) / move.iterations;
      item.tempPos.y += move.path.length * (next.y - orig.y) / move.iterations;

      move.i++;

      if(move.i >= move.iterations){
        move.i = 0;
      }
    }
  }

}
