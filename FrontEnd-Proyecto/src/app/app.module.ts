import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {RUTAS} from "./rutas";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(

      RUTAS, {useHash: true}

    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
