import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FOOTER_BTN } from './shared/models/footerBtn';
import { AboutComponent } from './about/about.component';
import { DriverChoiceComponent } from './driver-choice/driver-choice.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Bienvenue sur l\'espace recrutement',
      footerBtns: [FOOTER_BTN.EXIT, FOOTER_BTN.ABOUT, FOOTER_BTN.DRIVER]
    }
  },{
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'A propos',
      footerBtns: [FOOTER_BTN.HELP, FOOTER_BTN.DRIVER]
    }
  },{
    path: 'driver-choice',
    component: DriverChoiceComponent,
    data: {
      title: 'Choix du pilote',
      footerBtns: [FOOTER_BTN.HELP, FOOTER_BTN.GAME]
    }
  },{
    path: 'game',
    component: GameComponent,
    data: {
      fullscreen: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakimaRoutingModule { }
