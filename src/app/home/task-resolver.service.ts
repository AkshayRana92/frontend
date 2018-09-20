import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {map, take} from 'rxjs/operators';
import {PowerService} from './power.service';

@Injectable()
export class TaskResolver implements Resolve<any> {

  constructor(private service: PowerService) {}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {

    const toTime = new Date().getTime();
    const fromTime = new Date().setHours(0, 0, 0, 0);

    return this.service.getPowerReadingsForLastDay(fromTime, toTime)
      .pipe(
        take(1),
        map((powers) => {
          return powers ? powers : null;
        })
      );
  }
}
