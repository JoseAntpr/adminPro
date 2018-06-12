import { NgModule } from '@angular/core';

import { PageRoutingModule } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PageRoutingModule
  ],
})
export class PagesModule { }
