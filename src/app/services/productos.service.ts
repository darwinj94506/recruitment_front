import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequest, LoginResponse, ErrorRequest, Employe, Product } from '../interfaces';

// const URL_API = "https://sales.makipos.la/employees/current";
const URL_API = "https://products2.makipos.la/v2/"

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  employe(): Observable<Employe> {
    return this.httpClient.get<any>('https://sales.makipos.la/employees/current')
        .pipe(
          catchError(this.errorHandler)
        )
  } 

  list(warehouseId): Observable<Product[]> {
    return this.httpClient.get<any>(URL_API+'products?page=1&warehouses='+warehouseId+'&limit=20')
        .pipe(
          catchError(this.errorHandler)
        )
  } 

  errorHandler(error) {
    let errorResponse: ErrorRequest;
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorResponse.errorMessage = error.error.message;
      errorResponse.errorCode = null;
    } else {
      // Get server-side error
      errorResponse.errorCode = error.status;
      errorResponse.errorMessage =error.message;
    }
    return throwError(errorResponse);
 }
}
