import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AutorizacionService} from './autorizacion.service';
import {LoginComponent} from './login/login.component';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const RUTAS: Routes = [

  {
    path: 'usuario/:id/home',
    //path: 'home',
    component: HomeComponent,
    // canActivate: [AutorizacionService],
    children:[
      { path: 'registro', component: TablaDatosComponent },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
 /*  {
    path: 'registro',
    component: TablaDatosComponent,
  }, */
  {
    path: 'configuracion',
    component: UsuarioComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
