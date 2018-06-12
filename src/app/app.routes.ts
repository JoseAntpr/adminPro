import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { Page404Component } from './shared/page404/page404.component';
import { PagesComponent } from './pages/pages.component';
import { SignUpComponent } from './login/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class RoutingModule { }
