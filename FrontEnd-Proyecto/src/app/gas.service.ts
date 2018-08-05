import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

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
