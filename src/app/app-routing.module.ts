import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakimaComponent } from './modules/takima/takima.component';

const routes: Routes = [
  {
    path: 'takima',
    component: TakimaComponent,
    loadChildren: './modules/takima/takima.module#TakimaModule'
  },
  { path: '', redirectTo: '/takima/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
