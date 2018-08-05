import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GasInterface} from "./interfaces/gas.interface";


@Injectable({
  providedIn: 'root'
})
export class GasService {
  public static datosGas:GasInterface;
  constructor(private http:HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }
  obtenerDatos(){
    console.log('jjj');
    return this.http.get("http://localhost:1337/gas",{headers:GasService.getCommonHeaders()});
  }
}