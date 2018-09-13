import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {TaskService} from './task.service';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskResolver implements Resolve<any> {

  constructor(private service: TaskService) {}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.service.getPowerReadingsForLastDay()
      .pipe(
        take(1),
        map((powers) => {
          return powers ? powers : null;
        })
      );
  }
}
