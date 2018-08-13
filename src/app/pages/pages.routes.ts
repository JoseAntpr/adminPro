import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalsComponent } from './hospitals/hospitals.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'} },
      { path: 'graphics1', component: Graphics1Component, data: {titulo: 'Graficas'} },
      { path: 'promises', component: PromisesComponent, data: {titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'} },
      { path: 'account', component: AccountSettingsComponent , data: {titulo: 'Ajustes'}},
      { path: 'profile', component: ProfileComponent , data: {titulo: 'Perfil de usuario'}},

      // Mantenimientos
      { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuario'}},
      { path: 'hospitals', component: HospitalsComponent, data: {titulo: 'Mantenimiento de hospitales'}},
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
exports: [RouterModule],
})
export class PageRoutingModule { }
