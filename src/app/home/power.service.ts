import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PowerService {

  readonly api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPowerReadingsForLastDay(fromTime: number, toTime: number): Observable<any> {
    const GET_POWER_URL = `${this.api}/power?from=${fromTime}&to=${toTime}`;
    return this.http.get(GET_POWER_URL).pipe(
      catchError(this.handleError)
    );
  }

  getLastPowerReading(): Observable<any> {
    const GET_POWER_URL = `${this.api}/power/last`;
    return this.http.get(GET_POWER_URL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errMsg = '';
    if (error.error instanceof ErrorEvent) {
        errMsg = 'An error occurred:' + error.error.message;
    } else {
      errMsg = `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
    }
    return throwError(errMsg);
  }

}
