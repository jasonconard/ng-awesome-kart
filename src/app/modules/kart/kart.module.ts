import { NgModule } from '@angular/core';
import { RaceComponent } from './race/race.component';
import { StickComponent } from './stick/stick.component';
import { TimePipe } from '../../shared/pipes/time.pipe';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RaceComponent
  ],
  declarations: [
    RaceComponent,
    StickComponent
  ]
})
export class KartModule { }
