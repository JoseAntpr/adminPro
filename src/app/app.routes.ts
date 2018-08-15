import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Page404Component } from './shared/page404/page404.component';
import { SignUpComponent } from './login/sign-up.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './services/service.index';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  {path: '',
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class RoutingModule { }
