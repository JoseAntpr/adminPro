import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { PageRoutingModule } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';

// Temporal
import { IncrementComponent } from '../components/increment/increment.component';
import { DoughnutCharComponent } from '../components/doughnut-char/doughnut-char.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    IncrementComponent,
    DoughnutCharComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    IncrementComponent,
    DoughnutCharComponent
  ],
  imports: [
    SharedModule,
    PageRoutingModule,
    FormsModule,
    ChartsModule
  ],
})
export class PagesModule { }
