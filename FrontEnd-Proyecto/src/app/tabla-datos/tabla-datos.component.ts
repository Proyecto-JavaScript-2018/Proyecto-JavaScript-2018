import { Component, OnInit } from '@angular/core';
import {GasInterface} from "../interfaces/gas.interface";
import {GasService} from "../gas.service";

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css'],
  providers: [GasService]
})

export class TablaDatosComponent implements OnInit {

  datosTabla:Array<GasInterface>;

  constructor(
    private gasService:GasService
  ) { }
  ngOnInit() {
    this.gasService.obtenerDatos()
      .subscribe(
        (result:any)=>{
          this.datosTabla = result;
          console.log(this.datosTabla);
        }
      );
  }

  /*agregarATabla(nuevoGas:GasInterface){
    console.log(nuevoGas);
    GasService.datosGas.push(nuevoGas);
  }*/

}
