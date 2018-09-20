import { TestBed, inject } from '@angular/core/testing';

import { PowerService } from './power.service';
import {HttpClient} from '@angular/common/http';
import {of, throwError} from 'rxjs';

describe('PowerService', () => {

  const HTTP_MOCK = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerService, {provide: HttpClient, useValue: HTTP_MOCK}]
    });
  });

  it('should be created', inject([PowerService], (service: PowerService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to get power data for last day', inject([PowerService], (service: PowerService) => {
    HTTP_MOCK.get.and.returnValue(of([{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}]));
    const res = service.getPowerReadingsForLastDay(0, 1);
    res.subscribe(data => expect(data).toEqual([{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}]));
  }));

  it('should not be able to get power data: Exception case', inject([PowerService], (service: PowerService) => {
    HTTP_MOCK.get.and.returnValue(throwError({error: new ErrorEvent('test')}));
    const res = service.getPowerReadingsForLastDay(0, 1);
    res.subscribe(data => data, err => expect(err).toMatch('An error occurred'));
  }));

  it('should not be able to get power data: Exception case', inject([PowerService], (service: PowerService) => {
    HTTP_MOCK.get.and.returnValue(throwError(new ErrorEvent('test')));
    const res = service.getPowerReadingsForLastDay(0, 1);
    res.subscribe(data => data, err => expect(err).toMatch('Backend returned code'));
  }));

  it('should be able to get last power data', inject([PowerService], (service: PowerService) => {
    HTTP_MOCK.get.and.returnValue(of({'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}));
    const res = service.getLastPowerReading();
    res.subscribe(data => expect(data).toEqual({'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}));
  }));

  it('should not be able to get last power data: Exception case', inject([PowerService], (service: PowerService) => {
    HTTP_MOCK.get.and.returnValue(throwError({error: new ErrorEvent('test')}));
    const res = service.getLastPowerReading();
    res.subscribe(data => data, err => expect(err).toMatch('An error occurred'));
  }));

  it('should not be able to get last power data: Exception case', inject([PowerService], (service: PowerService) => {
    HTTP_MOCK.get.and.returnValue(throwError(new ErrorEvent('test')));
    const res = service.getLastPowerReading();
    res.subscribe(data => data, err => expect(err).toMatch('Backend returned code'));
  }));

});
