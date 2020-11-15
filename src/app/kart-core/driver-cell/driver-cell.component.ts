import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Driver } from '../../modules/kart/shared/models/driver';

@Component({
  selector: 'app-driver-cell',
  templateUrl: './driver-cell.component.html',
  styleUrls: ['./driver-cell.component.scss']
})
export class DriverCellComponent implements OnInit, OnDestroy {

  @Input() driver: Driver = null;
  @Input() selected: boolean = false;

  private intervalId: number = -1;
  private frame: number = 0;

  private frames = [
    '-128px 0', '-64px 0', '-128px 0', '-192px 0'
  ];

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval( () => {
       this.frame = (this.frame+1) % this.frames.length;
    }, 200);
  }

  ngOnDestroy(): void {

  }

  getBgStyle() {
    return {
      'background-image': 'url("' + this.driver.mainBackground + '")'
    };
  }

  getSpriteStyle() {
    return {
      'background-image': 'url("' + this.driver.sprite.url + '")',
      'background-position': this.frames[this.selected ? this.frame : 0]
    };
  }

}
