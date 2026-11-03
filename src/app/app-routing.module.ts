import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakimaComponent } from './modules/takima/takima.component';

const routes: Routes = [
  {
    path: 'takima',
    component: TakimaComponent,
    loadChildren: () => import('./modules/takima/takima.module').then(m => m.TakimaModule)
  },
  { path: '', redirectTo: '/takima/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
