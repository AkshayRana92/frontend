import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSecondComponent } from './task-second.component';
import {ActivatedRoute} from '@angular/router';
import {PowerService} from '../power.service';
import {of} from 'rxjs';
import {LineGraphComponent} from '../../graph/line-graph/line-graph.component';
import {D3_TOKEN} from '../../graph/d3.config';
import {Component, Input} from '@angular/core';
import {Power} from '../../power';

@Component({selector: 'app-line-graph', template: ''})
class LineGraphStubComponent {
  @Input() data: Power[];
  @Input() newValue: Power;
}

describe('TaskSecondComponent', () => {
  let component: TaskSecondComponent;
  let fixture: ComponentFixture<TaskSecondComponent>;
  // let powerService: PowerService;

  let powerData = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
  const ActivatedRouteMock = {
    data: of({powerData})
  };

  const PowerServiceMock = jasmine.createSpyObj('PowerService', ['getLastPowerReading']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSecondComponent, LineGraphStubComponent ],
      providers: [{provide: ActivatedRoute, useValue: ActivatedRouteMock},
        {provide: PowerService, useValue: PowerServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSecondComponent);
    component = fixture.componentInstance;
    // powerService = TestBed.get(PowerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data on initialization', () => {
    spyOn(component, 'getNewReadingPeriodically');
    fixture.detectChanges();

    expect(component.getNewReadingPeriodically).toHaveBeenCalled();
    expect(component.graphData).toEqual(powerData);
  });

  it('should get data on initialization', () => {
    spyOn(component, 'getNewReadingPeriodically');
    component.getNewReadingPeriodically();

    expect(component.getNewReadingPeriodically).toHaveBeenCalled();
    expect(component.graphData).toEqual(powerData);
  });

  // it('should get data on initialization', () => {
  //   spyOn(component, 'getNewReadingPeriodically');
  //   // powerData.getLastPowerReading.and.returnValue
  //   component.getPowerReading();
  //
  //   expect(component.getNewReadingPeriodically).toHaveBeenCalled();
  //   expect(component.graphData).toEqual(powerData);
  // });
});
