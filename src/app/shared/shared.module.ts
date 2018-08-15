import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pipes module
import { PipesModule } from '../pipes/pipes.module';

import { HeaderComponent } from './header/header.component';
import { Page404Component } from './page404/page404.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule
  ],
  declarations: [
    HeaderComponent,
    Page404Component,
    SidebarComponent,
    BreadcrumbsComponent,
    ModalUploadComponent,
  ],
  exports: [
    HeaderComponent,
    Page404Component,
    SidebarComponent,
    BreadcrumbsComponent,
    ModalUploadComponent,
  ]
})
export class SharedModule { }
