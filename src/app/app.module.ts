import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';

// Router
import { RoutingModule } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
