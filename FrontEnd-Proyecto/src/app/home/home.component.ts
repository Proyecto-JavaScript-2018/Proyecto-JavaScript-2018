import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Cookies from 'js-cookie';
import {CredencialesService} from '../credenciales.service';
import {Router} from '@angular/router';
import {Gas} from '../Gas';
import { GasService } from '../gas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gasDetectado = [];
  gas:Gas;

  constructor(private httpClient: HttpClient,
              private httpClient2: HttpClient,
              private _credenciales: CredencialesService,
              private _router: Router,
              private gasService: GasService,
              
            ) {
  }

  ngOnInit() {

    this.ocultarElementos();
    // this.consultarBase();

    this.httpClient.get(`http://localhost:1338/Gas?visto=false`).subscribe((data: any[]) => {
        this.gasDetectado = data;

        if (this.gasDetectado.length === 0) {
          this.mostrarElementosCool();

        } else {  
          this.mostrarElementosAlerta();
        }
      }
    );
  }

  mostrarElementosAlerta() {

    const mostrarCardWarning = <HTMLFormElement>document.getElementById('card_Alerta');
    mostrarCardWarning.style.display = 'block';

  }

  mostrarElementosCool() {

    const mostrarCardWarning = <HTMLFormElement>document.getElementById('card_Cool');
    mostrarCardWarning.style.display = 'block';

  }

  ocultarElementos() {

    const mostrarCardWarning = <HTMLFormElement>document.getElementById('card_Cool');
    mostrarCardWarning.style.display = 'none';

    const mostrarCardCool = <HTMLFormElement>document.getElementById('card_Alerta');
    mostrarCardCool.style.display = 'none';

  }

  consultarBase() {

    this.httpClient.get(`http://localhost:1338/Gas?visto=false`).subscribe((data: any[]) => {
        this.gasDetectado = data;
      }
    );

  }

  /* cambiarVisto(i) {
    this.httpClient2.put(`http://localhost:1338/Gas/${i}`, {

      visto: true

    }).subscribe(
      res => { 
      }
    );
    const json = Cookies.getJSON('cookieWeb');
    console.log('Cookies...... ',json);
    if (this._credenciales.cookies(json.estado) === true) {
      const rutaHomeUsuario = ['/usuario', json.id, 'home'];
      this._router.navigate(rutaHomeUsuario);
      location.reload();
    } else {

    }
  } */


  cambiarVisto(gas:Gas,index:number){
   /*  console.log('Tienda Id: ', producto.tiendaIdFK);
     this.producto=producto;
    console.log('tiendaIDFK producto', this.producto.tiendaIdFK);
    this.producto.vendido=false; */
    gas.visto=true;
    this.gasService.updateBorradoProducto(gas)
    .subscribe(value=>value=gas);
    this.gasDetectado.splice(index,1);
    if (this.gasDetectado.length === 0) {
      const mostrarCardWarning = <HTMLFormElement>document.getElementById('card_Alerta');
    mostrarCardWarning.style.display = 'none';
      this.mostrarElementosCool();

    } 
  }


  cambiarEpoch(date): Date {
    return new Date(date);
  }

}
