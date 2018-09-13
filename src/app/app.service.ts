import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getData(): Observable<any> {
    return of({});
  }
}
