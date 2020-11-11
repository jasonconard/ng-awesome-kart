import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './kart-core/welcome/welcome.component';
import { AboutComponent } from './kart-core/about/about.component';
import { DriverChoiceComponent } from './kart-core/driver-choice/driver-choice.component';
import { GameComponent } from './kart-core/game/game.component';
import { FOOTER_BTN } from './shared/models/footerBtn';

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
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
