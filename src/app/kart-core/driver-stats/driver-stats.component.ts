import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Driver } from '../../modules/kart/shared/models/driver';
import { STATS_MAX } from '../../modules/kart/kart.constants';

@Component({
  selector: 'app-driver-stats',
  templateUrl: './driver-stats.component.html',
  styleUrls: ['./driver-stats.component.scss']
})
export class DriverStatsComponent implements OnInit, OnChanges {

  @Input() driver: Driver = null;

  public statsList: { label: string, value: number }[] = [];
  public valueCells = [];

  constructor() { }

  ngOnInit(): void {
    this.valueCells = [];
    for(let i = 1; i < STATS_MAX; i++) {
      this.valueCells.push(i);
    }
    this.initDriver();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.driver) {
      this.initDriver();
    }
  }

  initDriver() {
    if(this.driver) {
      const stats = this.driver.stats;
      if(this.statsList.length) {
        this.statsList.forEach(stat => {
          switch (stat.label) {
            case "Speed": stat.value = stats.speed; break;
            case "Acceleration": stat.value = stats.acceleration; break;
            case "Weight": stat.value = stats.weight; break;
            case "Handling": stat.value = stats.handling; break;
            case "Traction": stat.value = stats.traction; break;
            case "Luck": stat.value = stats.luck; break;
          }
        });
      } else {
        this.statsList = [
          { label: "Speed", value: stats.speed },
          { label: "Acceleration", value: stats.acceleration },
          { label: "Weight", value: stats.weight },
          { label: "Handling", value: stats.handling },
          { label: "Traction", value: stats.traction },
          { label: "Luck", value: stats.luck },
        ];
      }

    }
  }

  getDriverStyle(shown: boolean) {
    return !shown ? null : {
      'background-image': 'url("' + this.driver.mainBackground + '")'
    };
  }

}
