import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pipes module
import { PipesModule } from '../pipes/pipes.module';

import { HeaderComponent } from './header/header.component';
import { Page404Component } from './page404/page404.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

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
    BreadcrumbsComponent
  ],
  exports: [
    HeaderComponent,
    Page404Component,
    SidebarComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { }
