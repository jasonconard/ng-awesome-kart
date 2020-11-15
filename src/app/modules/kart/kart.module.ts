import { NgModule } from '@angular/core';
import { RaceComponent } from './race/race.component';
import { StickComponent } from './stick/stick.component';
import { TimePipe } from './shared/pipes/time.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RaceComponent,
    TimePipe
  ],
  declarations: [
    RaceComponent,
    StickComponent,
    TimePipe
  ]
})
export class KartModule { }
