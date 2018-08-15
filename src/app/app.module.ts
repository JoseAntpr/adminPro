import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
// import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import { PagesComponent } from './pages/pages.component';

// Router
import { RoutingModule } from './app.routes';


// Services
import { ServiceModule } from './services/service.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ServiceModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
