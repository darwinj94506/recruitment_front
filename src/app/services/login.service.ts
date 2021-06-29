import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequest, LoginResponse, ErrorRequest } from '../interfaces';

const URL_AUTH = "https://acl.makipos.la/api/authenticate";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(URL_AUTH , JSON.stringify(credentials), this.httpOptions)
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
