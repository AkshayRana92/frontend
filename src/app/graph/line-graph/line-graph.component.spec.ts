import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LineGraphComponent} from './line-graph.component';
import {SimpleChanges} from '@angular/core';
import {D3_TOKEN} from '../d3.config';

describe('LineGraphComponent', () => {
  let component: LineGraphComponent;
  let fixture: ComponentFixture<LineGraphComponent>;
  let D3_MOCK = jasmine.createSpyObj('D3_TOKEN',
    ['select', 'axisBottom', 'axisLeft', 'scaleTime', 'translateExtent',
      'extent', 'scaleExtent', 'scaleLinear', 'call', 'line', 'datum', 'remove',
      'append', 'attr', 'drag', 'on', 'bisector', 'text', 'zoom', 'area']);
  D3_MOCK.event = {x: 1, y: 1, rescaleX: jasmine.createSpy('rescaleX').and.returnValue({})};

  afterEach(() => {
    // this.removeAllSpies();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineGraphComponent],
      providers: [{provide: D3_TOKEN, useValue: D3_MOCK}]
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
    const changes: SimpleChanges = {
      newValue:
        {
          previousValue: null,
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
    const changes: SimpleChanges = {
      data:
        {
          previousValue: null,
          currentValue: component.data,
          firstChange: false,
          isFirstChange: () => false
        }
    };

    const spy_obj = {remove: jasmine.createSpy('remove')};
    D3_MOCK.select.and.returnValue(spy_obj);
    spyOn(component, 'initChartWithData');
    component.ngOnChanges(changes);
    expect(component.graph.data).toEqual(component.data);
    expect(component.initChartWithData).toHaveBeenCalled();
    expect(spy_obj.remove).toHaveBeenCalled();
  });

  it('should be able to redraw chart when graph is zoomed in', () => {
    const spy_domain = {domain: jasmine.createSpy('domain')};
    const spy_select = {call: jasmine.createSpy('call'), attr: jasmine.createSpy('attr')};
    component.graph.transform_state = <any>{rescaleX: jasmine.createSpy('rescaleX').and.returnValue(spy_domain)};
    component.graph.x_scale = jasmine.createSpyObj('x_scale', ['domain']);
    component.graph.parent_group = <any>{select: jasmine.createSpy('select').and.returnValue(spy_select)};
    component.graph.svg = <any>{select: jasmine.createSpy('select').and.returnValue(spy_select)};
    spyOn(component, 'addAreaToGraph');
    spyOn(component, 'initChartWithData');

    component.redrawLineChart();

    expect(component.addAreaToGraph).toHaveBeenCalled();
    expect(component.graph.transform_state.rescaleX).toHaveBeenCalled();
    expect(spy_domain.domain).toHaveBeenCalled();
    expect(component.graph.x_scale.domain).toHaveBeenCalled();
    expect(component.graph.parent_group.select).toHaveBeenCalledWith('.x-axis');
    expect(component.graph.svg.select).toHaveBeenCalledWith('.y-axis');
    expect(spy_select.call).toHaveBeenCalled();
    expect(D3_MOCK.axisLeft).toHaveBeenCalled();
  });

  it('should be able to redraw chart when graph is not zoomed in', () => {
    component.graph.transform_state = undefined;
    spyOn(component, 'setXYScale');
    component.graph.svg = <any>{select: jasmine.createSpy('select').and.returnValue(D3_MOCK)};
    spyOn(component, 'addAreaToGraph');
    component.redrawLineChart();

    expect(component.addAreaToGraph).toHaveBeenCalled();
    expect(component.graph.svg.select).toHaveBeenCalledWith('.y-axis');
    expect(D3_MOCK.call).toHaveBeenCalled();
    expect(D3_MOCK.axisLeft).toHaveBeenCalled();

  });

  it('should be able to initialize chart', () => {
    component.graph.transform_state = undefined;
    spyOn(component, 'initializeSVGElement');
    spyOn(component, 'setXYScale');
    spyOn(component, 'drawXYAxis');
    spyOn(component, 'drawLineGraph');
    spyOn(component, 'initDragEvents');
    spyOn(component, 'initZoomEvent');

    component.initChartWithData();

    expect(component.initializeSVGElement).toHaveBeenCalled();
    expect(component.setXYScale).toHaveBeenCalled();
    expect(component.drawXYAxis).toHaveBeenCalled();
    expect(component.drawLineGraph).toHaveBeenCalled();
    expect(component.initDragEvents).toHaveBeenCalled();
    expect(component.initZoomEvent).toHaveBeenCalled();
  });

  it('should be able to initialize svg element', () => {
    D3_MOCK.select.and.returnValue(D3_MOCK);
    D3_MOCK.append.and.returnValue(D3_MOCK);
    D3_MOCK.attr.and.returnValue(D3_MOCK);
    component.graph.svg = <any>{select: jasmine.createSpy('append').and.returnValue(D3_MOCK)};

    component.initializeSVGElement();

    expect(component.graph.margin).toEqual({top: 50, right: 50, bottom: 30, left: 60});
    expect(component.graph.height).toEqual(220);
    expect(D3_MOCK.append).toHaveBeenCalledWith('svg');
    expect(D3_MOCK.append).toHaveBeenCalledWith('g');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'parent');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('pointer-events', 'all');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('height', 300);
  });

  it('should be able to initialize drag events', () => {
    component.graph.svg = <any>{call: jasmine.createSpy('call').and.returnValue(D3_MOCK)};
    D3_MOCK.drag.and.returnValue(D3_MOCK);
    D3_MOCK.on.and.returnValue(D3_MOCK);

    component.initDragEvents();

    expect(component.graph.svg.call).toHaveBeenCalled();
    expect(D3_MOCK.on).toHaveBeenCalled();
  });

  it('should be able to handle drag start event', () => {
    component.graph.rectangular_selection = <any>{remove: jasmine.createSpy('remove')};
    component.graph.parent_group = <any>{append: jasmine.createSpy('append').and.returnValue(D3_MOCK)};
    component.graph.margin = {top: 1, right: 1, bottom: 1, left: 1};
    D3_MOCK.drag.and.returnValue(D3_MOCK);
    D3_MOCK.on.and.returnValue(D3_MOCK);
    D3_MOCK.append.and.returnValue(D3_MOCK);
    D3_MOCK.attr.and.returnValue(D3_MOCK);

    component.onDragStart();

    expect(D3_MOCK.append).toHaveBeenCalledWith('g');
    expect(D3_MOCK.append).toHaveBeenCalledWith('rect');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('x', 0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('y', 0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('width', 1);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('fill', 'black');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('opacity', '0.2');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'rect-main');
  });

  it('should be able to handle drag event when dragging left to right', () => {
    component.graph.rectangular_selection_text = <any>{remove: jasmine.createSpy('remove')};
    component.graph.rectangular_selection_x_coordinate = 0;
    component.graph.rectangular_selection = <any>{attr: jasmine.createSpy('attr').and.returnValue(D3_MOCK)};
    component.graph.x_scale = <any>{invert: jasmine.createSpy('invert').and.returnValue(new Date())};
    component.graph.svg = <any>{append: jasmine.createSpy('append').and.returnValue(D3_MOCK)};
    const test_bisect = jasmine.createSpy('bisect').and.returnValue(0);
    D3_MOCK.bisector.and.returnValue({left: test_bisect});
    component.graph.data = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
    component.graph.margin = {top: 1, right: 1, bottom: 1, left: 1};
    D3_MOCK.attr.and.returnValue(D3_MOCK);
    D3_MOCK.text.and.returnValue(D3_MOCK);

    component.onDrag();

    expect(component.selected_region_energy).toEqual(0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('x', 0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('y', (1 - 10));
    expect(D3_MOCK.attr).toHaveBeenCalledWith('font-weight', 'bold');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'energy-text');
  });

  it('should be able to handle drag event when dragging right to left', () => {
    component.graph.rectangular_selection_text = <any>{remove: jasmine.createSpy('remove')};
    component.graph.rectangular_selection_x_coordinate = 2;
    component.graph.rectangular_selection = <any>{attr: jasmine.createSpy('attr').and.returnValue(D3_MOCK)};
    component.graph.x_scale = <any>{invert: jasmine.createSpy('invert').and.returnValue(new Date())};
    component.graph.svg = <any>{append: jasmine.createSpy('append').and.returnValue(D3_MOCK)};
    const test_bisect = jasmine.createSpy('bisect').and.returnValue(0);
    D3_MOCK.bisector.and.returnValue({left: test_bisect});
    component.graph.data = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
    component.graph.margin = {top: 1, right: 1, bottom: 1, left: 1};
    D3_MOCK.attr.and.returnValue(D3_MOCK);
    D3_MOCK.text.and.returnValue(D3_MOCK);

    component.onDrag();

    expect(component.selected_region_energy).toEqual(0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('x', 0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('y', (1 - 10));
    expect(D3_MOCK.attr).toHaveBeenCalledWith('font-weight', 'bold');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'energy-text');
  });

  it('should be able to handle drag end event when x coordinate hasnt changed', () => {
    component.graph.rectangular_selection_x_coordinate = 1;
    component.graph.rectangular_selection = <any>{remove: jasmine.createSpy('remove')};
    component.graph.rectangular_selection_text = <any>{remove: jasmine.createSpy('remove')};

    component.onDragEnd();

    expect(component.graph.rectangular_selection.remove).toHaveBeenCalled();
    expect(component.graph.rectangular_selection_text.remove).toHaveBeenCalled();
  });


  it('should be able initialize zoom event', () => {
    component.graph.width = 100;
    component.graph.height = 100;
    component.graph.x_scale = <any>{domain: jasmine.createSpy('domain')};
    const spy_range = {rangeRound: jasmine.createSpy('rangeRound').and.returnValue({domain: jasmine.createSpy('domain')})};
    component.graph.rectangular_selection_x_coordinate = 1;
    component.graph.rectangular_selection = <any>{remove: jasmine.createSpy('remove')};
    component.graph.rectangular_selection_text = <any>{remove: jasmine.createSpy('remove')};
    component.graph.svg = <any>{call: jasmine.createSpy('call')};
    D3_MOCK.scaleTime.and.returnValue(spy_range);
    D3_MOCK.zoom.and.returnValue(D3_MOCK);
    D3_MOCK.scaleExtent.and.returnValue(D3_MOCK);
    D3_MOCK.translateExtent.and.returnValue(D3_MOCK);
    D3_MOCK.extent.and.returnValue(D3_MOCK);
    D3_MOCK.on.and.returnValue(D3_MOCK);
    spyOn(component, 'onZoom');

    component.initZoomEvent();

    expect(D3_MOCK.zoom).toHaveBeenCalled();
    expect(D3_MOCK.scaleExtent).toHaveBeenCalledWith([1, Infinity]);
    expect(D3_MOCK.translateExtent).toHaveBeenCalledWith([[0, 0], [100, 100]]);
    expect(D3_MOCK.extent).toHaveBeenCalledWith([[0, 0], [100, 100]]);
    expect(D3_MOCK.on).toHaveBeenCalled();
  });

  it('should be able to set x and y scale', () => {
    const spy_range = {rangeRound: jasmine.createSpy('rangeRound')};
    D3_MOCK.scaleTime.and.returnValue({domain: jasmine.createSpy('domain').and.returnValue(spy_range)})
    D3_MOCK.scaleLinear.and.returnValue({domain: jasmine.createSpy('domain').and.returnValue(spy_range)})

    component.setXYScale();

    expect(D3_MOCK.scaleTime).toHaveBeenCalled();
    expect(D3_MOCK.scaleLinear).toHaveBeenCalled();
  });

  it('should be able to draw x and y axis', () => {
    D3_MOCK.attr.and.returnValue(D3_MOCK);
    D3_MOCK.call.and.returnValue(D3_MOCK);
    D3_MOCK.append.and.returnValue(D3_MOCK);
    D3_MOCK.text.and.returnValue(D3_MOCK);
    component.graph.height = 300;
    component.graph.parent_group = <any>{append: jasmine.createSpy('append').and.returnValue(D3_MOCK)};

    component.drawXYAxis();

    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'y-axis');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'x-axis');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('fill', '#000');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('transform', 'rotate(-90)');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('y', 6);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('dy', '0.71em');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('text-anchor', 'end');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('transform', 'translate(0,300)');
    expect(D3_MOCK.text).toHaveBeenCalledWith('Power');
    expect(D3_MOCK.append).toHaveBeenCalledWith('text');
    expect(D3_MOCK.call).toHaveBeenCalled();
    expect(D3_MOCK.axisBottom).toHaveBeenCalled();
  });

  it('should be able to draw drawLineGraph', () => {
    component.graph.width = 10;
    component.graph.height = 10;
    const spy_line_y = {y: jasmine.createSpy('y')};
    const spy_line_x = {x: jasmine.createSpy('x').and.returnValue(spy_line_y)};
    component.graph.data = [{'time': 1537079694837, 'values': {'power': 1676000, 'energy': 333531381728000}}];
    const area_mock = jasmine.createSpyObj('area_mock', ['x', 'y0', 'y1'])

    D3_MOCK.attr.and.returnValue(D3_MOCK);
    D3_MOCK.call.and.returnValue(D3_MOCK);
    D3_MOCK.append.and.returnValue(D3_MOCK);
    D3_MOCK.datum.and.returnValue(D3_MOCK);
    D3_MOCK.line.and.returnValue(spy_line_x);
    D3_MOCK.area.and.returnValue(area_mock);
    area_mock.x.and.returnValue(area_mock);
    area_mock.y0.and.returnValue(area_mock);
    area_mock.y1.and.returnValue(area_mock);
    component.graph.height = 300;
    component.graph.parent_group = <any>{append: jasmine.createSpy('append').and.returnValue(D3_MOCK)};
    component.graph.svg = <any>{append: jasmine.createSpy('append').and.returnValue(D3_MOCK)};
    spyOn(component, 'addAreaToGraph');

    component.drawLineGraph();

    expect(D3_MOCK.append).toHaveBeenCalledWith('clipPath');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('id', 'clip');
    expect(D3_MOCK.append).toHaveBeenCalledWith('rect');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('x', 0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('y', 0);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('width', 10);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('width', 10);
    expect(D3_MOCK.line).toHaveBeenCalled();
    expect(D3_MOCK.area).toHaveBeenCalled();
    expect(component.addAreaToGraph).toHaveBeenCalled();
    expect(component.graph.parent_group.append).toHaveBeenCalledWith('path');
    expect(D3_MOCK.datum).toHaveBeenCalledWith(component.graph.data);
    expect(D3_MOCK.attr).toHaveBeenCalledWith('clip-path', 'url(#clip)');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'line');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('fill', 'transparent');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('stroke', '#3f873a');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('stroke-linejoin', 'round');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('stroke-linecap', 'round');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('stroke-width', 1.5);

  });

  it('should be able to add area to the graph', () => {
    component.graph.area = null;
    component.graph.data = [];
    D3_MOCK.select.and.returnValue(D3_MOCK);
    D3_MOCK.datum.and.returnValue(D3_MOCK);
    D3_MOCK.attr.and.returnValue(D3_MOCK);
    component.graph.parent_group = <any>{append: jasmine.createSpy('append').and.returnValue(D3_MOCK)};

    component.addAreaToGraph();

    expect(component.graph.parent_group.append).toHaveBeenCalledWith('path');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('clip-path', 'url(#clip)');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('class', 'area');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('fill', '#3f873a');
    expect(D3_MOCK.attr).toHaveBeenCalledWith('d', null);
    expect(D3_MOCK.datum).toHaveBeenCalledWith([]);
    expect(D3_MOCK.select).toHaveBeenCalledWith('.area');
    expect(D3_MOCK.remove).toHaveBeenCalled();
  });
});
