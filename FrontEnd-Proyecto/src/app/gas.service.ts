import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GasInterface} from "./interfaces/gas.interface";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import {Gas} from './Gas'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GasService {
  private productosUrl = 'http://localhost:1338/gas';

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
    return this.http.get("http://10.42.0.1:1338/gas",{headers:GasService.getCommonHeaders()});
  }

  updateBorradoProducto (gas: Gas): Observable<any>{
  
    const url = `${this.productosUrl}/${gas.id}`;
    return this.http.put(url, gas, httpOptions).pipe(
      tap(_ => console.log(`estado cambiado de gas id=${gas.id}`)),
      catchError(this.handleError<any>('updateGas'),)
    );
}





    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result  
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
         console.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}

