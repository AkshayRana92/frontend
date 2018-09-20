import { TestBed, inject } from '@angular/core/testing';

import { PowerService } from './power.service';
import {TaskResolver} from './task-resolver.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {of, throwError} from 'rxjs';

describe('PowerService', () => {

  const MOCK_POWERSERVICE = jasmine.createSpyObj('PowerService', ['getPowerReadingsForLastDay']);
  const MOCK_ROUTER = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskResolver, {provide: PowerService, useValue: MOCK_POWERSERVICE}, {provide: Router, useValue: MOCK_ROUTER}]
    });
  });

  it('should be created', inject([TaskResolver], (service: TaskResolver) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to get data', inject([TaskResolver], (service: TaskResolver) => {
    let route: ActivatedRouteSnapshot;
    MOCK_POWERSERVICE.getPowerReadingsForLastDay.and.returnValue(of([{'time': 1537079694837,
      'values': {'power': 1676000, 'energy': 333531381728000}}]));
    // route.queryParams = { page: undefined, sort: undefined };
    // route.data = { defaultSort: undefined };
    let res = service.resolve(route, null);
    res.subscribe(data => expect(data).toEqual([{'time': 1537079694837,
      'values': {'power': 1676000, 'energy': 333531381728000}}]));
  }));

});
