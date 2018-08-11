import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedService, SidebarService, SettingsService, UserService, AuthGuard, UploadFileService } from './service.index';


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
    UploadFileService
  ]
})
export class ServiceModule { }
