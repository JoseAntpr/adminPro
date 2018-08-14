import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  SharedService,
  SidebarService,
  SettingsService,
  UserService,
  AuthGuard,
  UploadFileService,
  HospitalService,
  DoctorService,
  AdminGuard
} from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    UserService,
    SharedService,
    SidebarService,
    SettingsService,
    AuthGuard,
    UploadFileService,
    ModalUploadService,
    HospitalService,
    DoctorService,
    AdminGuard
  ]
})
export class ServiceModule { }
