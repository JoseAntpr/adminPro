import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { Page404Component } from './page404/page404.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
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
    BreadcrumbsComponent
  ]
})
export class SharedModule { }