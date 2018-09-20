import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSecondComponent } from './task-second.component';
import {ActivatedRoute} from '@angular/router';
import {PowerService} from '../power.service';
import {of, throwError} from 'rxjs';
import {Component, Input} from '@angular/core';
import {Power} from '../../power';
import {LoaderService} from '../../shared/loader/loader.service';

@Component({selector: 'app-line-graph', template: ''})
class LineGraphStubComponent {
  @Input() data: Power[];
  @Input() newValue: Power;
}

describe('TaskSecondComponent', () => {
  let component: TaskSecondComponent;
  let fixture: ComponentFixture<TaskSecondComponent>;
  let loaderService: LoaderService;

  let powerData = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
  const ActivatedRouteMock = {
    data: of({powerData})
  };

  const PowerServiceMock = jasmine.createSpyObj('PowerService', ['getLastPowerReading', 'getPowerReadingsForLastDay']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSecondComponent, LineGraphStubComponent ],
      providers: [{provide: ActivatedRoute, useValue: ActivatedRouteMock},
        {provide: PowerService, useValue: PowerServiceMock}, LoaderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSecondComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.get(LoaderService);
    spyOn(loaderService, 'stopLoading');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data on initialization', () => {
    spyOn(component, 'getNewReadingPeriodically');
    fixture.detectChanges();

    expect(component.getNewReadingPeriodically).toHaveBeenCalled();
    expect(component.graphData).toEqual(powerData);
    expect(loaderService.stopLoading).toHaveBeenCalled();
  });

  it('should get PowerReading', () => {
    const timeBiggerThanEndingDay = new Date().setHours(0, 0, 0, 0) + (60 * 60 * 1000 *25 );
    spyOn(component, 'getNewReadingPeriodically');
    PowerServiceMock.getLastPowerReading.and.returnValue(of({'time': timeBiggerThanEndingDay,
      'values': {'power': 1676000, 'energy': 333531381728000}}));
    PowerServiceMock.getPowerReadingsForLastDay.and.returnValue(of([{'time': timeBiggerThanEndingDay,
      'values': {'power': 1676000, 'energy': 333531381728000}}]));
    component.getPowerReading();
    expect(PowerServiceMock.getLastPowerReading).toHaveBeenCalled();
    expect(PowerServiceMock.getPowerReadingsForLastDay).toHaveBeenCalled();
    expect(component.graphData).toEqual([{'time': timeBiggerThanEndingDay, 'values': {'power': 1676000, 'energy': 333531381728000}}]);
  });

  it('should not be able to get PowerReading : getLastPowerReading Exception', () => {
    spyOn(component, 'getNewReadingPeriodically');
    spyOn(console, 'error');
    PowerServiceMock.getLastPowerReading.and.returnValue(throwError(new Error('test')));
    component.getPowerReading();
    expect(console.error).toHaveBeenCalledWith(new Error('test'));
  });

  it('should not be able to get PowerReading : getPowerReadingsForLastDay Exception', () => {
    const timeBiggerThanEndingDay = new Date().setHours(0, 0, 0, 0) + (60 * 60 * 1000 *25 );
    spyOn(component, 'getNewReadingPeriodically');
    spyOn(console, 'error');
    PowerServiceMock.getLastPowerReading.and.returnValue(of({'time': timeBiggerThanEndingDay,
      'values': {'power': 1676000, 'energy': 333531381728000}}));
    PowerServiceMock.getPowerReadingsForLastDay.and.returnValue(throwError(new Error('test')));
    component.getPowerReading();
    expect(console.error).toHaveBeenCalledWith(new Error('test'));
  });

});
