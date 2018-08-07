import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AutorizacionService} from './autorizacion.service';
import {LoginComponent} from './login/login.component';
import {TablaDatosComponent} from './tabla-datos/tabla-datos.component';


export const RUTAS: Routes = [

  {
    path: 'usuario/:id/home',
    component: HomeComponent,
    /*canActivate: [AutorizacionService],*/

    children: [
      { path: 'tabla', component: TablaDatosComponent}
    ]

  },
  {
    path: 'login',
    component: LoginComponent,
  },
  /*{
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },*/
  {
    path: 'tabla',
    component: TablaDatosComponent,
  }

];
