import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://127.0.0.1:5000";

@Injectable({
  providedIn: 'root'
})
export class ApiPie2Service {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(): Observable<any> {
    const url = `${apiUrl}/api/test4`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
    }
  
 getData1(): Observable<any> {
    const url = `${apiUrl}/api/test5`;
    return this.http.get(url, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
    }

    
  
  

}