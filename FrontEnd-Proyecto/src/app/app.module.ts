import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RUTAS} from './app.rutas';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   
import {TableModule} from 'primeng/table';
//import {AngularFontAwesomeModule} from 'angular-font-awesome';  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
    TablaDatosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      RUTAS, {useHash: true}

    ),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    TableModule
    //AngularFontAwesomeModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
