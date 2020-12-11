import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestConfig } from '../models/requestConfig';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  doRequest(requestConfig: RequestConfig): Observable<HttpResponse<any>> {
    const url = requestConfig.url;

    switch (requestConfig.method.toLowerCase()) {

      case 'get':
        return this.doGet(url, requestConfig.params, requestConfig.headers);
      case 'post':
        return this.doPost(url, requestConfig.params, requestConfig.data, requestConfig.headers);
      case 'put':
        return this.doPut(url, requestConfig.params, requestConfig.data);
      default:
        return this.doGet(url, requestConfig.params);
    }
  }

  getBlob(url: string): Observable<Blob> { //get file from service
    return this.http.get(url, {
      responseType: 'blob'
    });
  }

  private doGet(url: string, params: any, headers?: any): Observable<HttpResponse<any>> {
    return this.http.get(url, { observe: 'response', params, headers })
      .pipe(
        catchError(err => {
          return this.handleError(err)
        })
      );
  }

  private doPost(url: string, params: any, data: any, headers?: any): Observable<HttpResponse<any>> {
    return this.http.post(url, data, { params, headers })
      .pipe(
        catchError(err => {
          return this.handleError(err)
        })
      );
  }

  private doPut(url: string, params: any, data: any): Observable<HttpResponse<any>> {
    return this.http.put(url, data, { params: params })
      .pipe(
        catchError(err => {
          return this.handleError(err)
        })
      );
  }

  private handleError(error: any): Observable<any> {
    let txt = 'LIB_ERROR_REQUEST_ERROR';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      txt = 'Error:' + error.error.message;
    } else if (typeof error.error === 'string') {
      txt = (error.errorMessage) ? error.errorMessage : error.error;
    } else if (error.statusText && typeof error.statusText === 'string') {
      txt = error.statusText;
      if (error.status === 0) {
        txt = 'LIB_ERR_NO_NETWORK';
      }
    }

    return throwError(txt);
  }
}
