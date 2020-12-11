import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { DriverChoiceComponent } from './driver-choice/driver-choice.component';
import { GameComponent } from './game/game.component';
import { DriverCellComponent } from './driver-cell/driver-cell.component';
import { DriverStatsComponent } from './driver-stats/driver-stats.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PopResultComponent } from './pop-result/pop-result.component';
import { AboutComponent } from './about/about.component';
import { TakimaRoutingModule } from './takima-routing.module';
import { TakimaComponent } from './takima.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { KartModule } from '../kart/kart.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TakimaRoutingModule,
    SharedModule,
    KartModule
  ],
  exports: [
  ],
  declarations: [
    TakimaComponent,
    WelcomeComponent,
    DriverChoiceComponent,
    GameComponent,
    DriverCellComponent,
    DriverStatsComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PopResultComponent,
    AboutComponent
  ]
})
export class TakimaModule { }
