import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RUTAS} from './rutas';
import {RouterModule} from '@angular/router';
import {MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ContextMenuModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ContextMenuModule,
    MatIconModule,
    RouterModule.forRoot(

      RUTAS, {useHash: true}

    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
