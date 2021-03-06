import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Pipes Module
import { PipesModule } from '../pipes/pipes.module';

// Temporal
import { IncrementComponent } from '../components/increment/increment.component';
import { DoughnutCharComponent } from '../components/doughnut-char/doughnut-char.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorComponent } from './doctors/doctor.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    IncrementComponent,
    DoughnutCharComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    HospitalsComponent,
    DoctorsComponent,
    DoctorComponent,
    BusquedaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    IncrementComponent,
    DoughnutCharComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule,
    FormsModule,
    ChartsModule,
    PipesModule
  ],
})
export class PagesModule { }
