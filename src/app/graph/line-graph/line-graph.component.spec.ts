import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LineGraphComponent} from './line-graph.component';
import {SimpleChanges} from '@angular/core';
import * as d3 from 'd3';

fdescribe('LineGraphComponent', () => {
  let component: LineGraphComponent;
  let fixture: ComponentFixture<LineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineGraphComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGraphComponent);
    component = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should be able to get data on ngOninit', () => {
    component.data = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
    spyOn(component, 'initChartWithData');
    fixture.detectChanges();
    expect(component.graph.data).toEqual([{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}]);
    expect(component.energy).toEqual(333531381728000);
    expect(component.initChartWithData).toHaveBeenCalled();
  });

  it('should be able handle input changes when newValue is updated', () => {
    component.graph.data = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
    component.newValue = {'time': 1537279694837, 'values': {'power': 1356000, 'energy': 333531381768000}};
    const changes: SimpleChanges = {newValue :
        {previousValue: null,
          currentValue: component.newValue,
          firstChange: false,
          isFirstChange: () => false
        }
    };

    spyOn(component, 'redrawLineChart');
    component.ngOnChanges(changes);
    expect(component.graph.data[1]).toEqual(component.newValue);
    expect(component.energy).toEqual(333531381768000);
    expect(component.redrawLineChart).toHaveBeenCalled();
  });


  it('should be able handle input changes when graph data is updated', () => {
    component.data = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
    const changes: SimpleChanges = {data :
        {
          previousValue: null,
          currentValue: component.data,
          firstChange: false,
          isFirstChange: () => false
        }
    };

    spyOn(component, 'initChartWithData');
    const d3SpyObject = jasmine.createSpyObj('d3', ['append', 'attr']);

    spyOn(d3, 'select').and.returnValue(d3SpyObject);
    component.ngOnChanges(changes);
    expect(component.graph.data).toEqual(component.data);
    expect(component.initChartWithData).toHaveBeenCalled();
    expect(d3.select).toHaveBeenCalledWith('.line-chart');
  });



});
