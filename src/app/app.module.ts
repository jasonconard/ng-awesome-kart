import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './kart-core/welcome/welcome.component';
import { MapChoiceComponent } from './kart-core/map-choice/map-choice.component';
import { GameComponent } from './kart-core/game/game.component';
import { FormsModule } from '@angular/forms';
import { DriverCellComponent } from './kart-core/driver-cell/driver-cell.component';
import { DriverStatsComponent } from './kart-core/driver-stats/driver-stats.component';
import { PageHeaderComponent } from './kart-core/page-header/page-header.component';
import { PageFooterComponent } from './kart-core/page-footer/page-footer.component';
import { DriverChoiceComponent } from './kart-core/driver-choice/driver-choice.component';
import { AboutComponent } from './kart-core/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { TimePipe } from './shared/pipes/time.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopResultComponent } from './kart-core/pop-result/pop-result.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DriverChoiceComponent,
    MapChoiceComponent,
    GameComponent,
    DriverCellComponent,
    DriverStatsComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PopResultComponent,
    AboutComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
