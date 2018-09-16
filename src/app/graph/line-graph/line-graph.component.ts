import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Graph} from '../../graph';
import * as d3 from 'd3';
import {Power} from '../../power';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit, OnChanges {

  private timer: any;
  energy: number;
  selected_region_energy: number;

  @Input() data: Power[];
  @Input() newValue: Power;

  graph: Graph = {
    data: undefined,
    x_scale: undefined,
    y_scale: undefined,
    x_axis: undefined,
    y_axis: undefined,
    svg: undefined,
    parent_group: undefined,
    width: undefined,
    height: undefined,
    zoomed_x_scale: undefined,
    transform_state: undefined,
    line: undefined,
    margin: undefined,
    rectangular_selection: undefined,
    rectangular_selection_text: undefined,
    rectangular_selection_x_coordinate: undefined
  };

  constructor() { }

  ngOnInit() {
    this.graph.data = this.data;
    this.energy = this.graph.data[this.graph.data.length - 1].values.energy;
    this.initChartWithData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newValue'] && this.newValue) {
      if (!changes['newValue'].isFirstChange()) {
        this.energy = this.newValue.values.energy;
        this.graph.data.push(this.newValue);
        this.redrawLineChart();
      }
    }
    if (changes['data'] && this.data) {
      if (!changes['data'].isFirstChange()) {
        this.graph.data = this.data;
        d3.select('.line-chart').remove();
        this.initChartWithData();
      }
    }
  }


  updateGraphData(newPower: any) {
    // TODO: find out wtf is this
    // const newStartTime: number = newPower.time - (24 * 60 * 60 * 1000);
    // for (let i = 0; i < this.graph.data.length; i++) {
    //   if (this.graph.data[i].time < newStartTime) {
    //     this.graph.data.shift();
    //   } else {
    //     break;
    //   }
    // }
    this.graph.data.push(newPower);
  }

  redrawLineChart() {
    // if zoomed in
    if (this.graph.transform_state) {
      this.graph.x_scale.domain(this.graph.transform_state.rescaleX(this.graph.zoomed_x_scale).domain());
      const x_axis = d3.axisBottom(this.graph.x_scale);
      this.graph.parent_group.select('.x-axis').call(x_axis);
      this.graph.svg.select('.y-axis').call(d3.axisLeft(this.graph.y_scale));
    } else {
      this.setXYScale();
      this.graph.svg.select('.x-axis').call(d3.axisBottom(this.graph.x_scale));
      this.graph.svg.select('.y-axis').call(d3.axisLeft(this.graph.y_scale));
    }
    this.graph.parent_group.select('.line').attr('d', this.graph.line);
  }

  initChartWithData() {
    this.initializeSVGElement();
    this.setXYScale();
    this.drawXYAxis();
    this.drawLineGraph();
    this.initDragEvents();
    this.initZoomEvent();

    const x = d3.scaleTime()
      .rangeRound([0, this.graph.width]);

    const y = d3.scaleLinear()
      .rangeRound([this.graph.height, 0]);

    const area: any = d3.area()
      .x((d: any) => x(d.time))
      .y1((d: any) => y(d.values.power));
    y.domain([0, d3.max(this.graph.data, function(d) { return d.values.power; })]);
    area.y0(y(0));

    this.graph.parent_group.append('path')
      .datum(this.graph.data)
      .attr('fill', 'steelblue')
      .attr('class', 'area')
      .attr('d', area);
  }

  initializeSVGElement(): void {
    const svgWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 600), svgHeight = 300;
    this.graph.margin = {top: 50, right: 50, bottom: 30, left: 60};
    this.graph.width = svgWidth - this.graph.margin.left - this.graph.margin.right;
    this.graph.height = svgHeight - this.graph.margin.top - this.graph.margin.bottom;
    d3.select('.container').append('svg')
      .attr('class', 'line-chart');

    this.graph.svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    this.graph.parent_group = this.graph.svg.append('g')
      .attr('class', 'parent')
      .attr('width', this.graph.width)
      .attr('transform',
        'translate(' + this.graph.margin.left + ',' + this.graph.margin.top + ')'
      )
      .attr('pointer-events', 'all');
  }

  initDragEvents(): void {
    this.graph.svg.call(d3.drag()
      .on('drag', () => this.onDrag())
      .on('start', () => this.onDragStart())
      .on('end', () => this.onDragEnd()));
  }

  onDragStart() {
    if (this.graph.rectangular_selection) {
      this.graph.rectangular_selection.remove();
    }
    this.graph.rectangular_selection_x_coordinate = d3.event.x;
    this.graph.rectangular_selection = this.graph.parent_group
      .append('g')
      .append('rect')
      .attr('x', d3.event.x - this.graph.margin.left)
      .attr('y', 0)
      .attr('width', 1)
      .attr('fill', 'black')
      .attr('opacity', '0.2')
      .attr('height', this.graph.height)
      .attr('class', 'rect-main');

  }
  onDrag() {
    let energy: number, energy2: number, text_x_coordinate: number, text_y_coordinate;
    if (this.graph.rectangular_selection_text) {
      this.graph.rectangular_selection_text.remove();
    }
    const rect_width = d3.event.x - this.graph.rectangular_selection_x_coordinate;
    const bisect = d3.bisector((d: any) => d.time).left;
    const power = this.graph.data[bisect(this.graph.data, new Date(this.graph.x_scale.invert(d3.event.x - this.graph.margin.left)))];
    const power2 = this.graph.data[bisect(this.graph.data,
      new Date(this.graph.x_scale.invert(this.graph.rectangular_selection_x_coordinate - this.graph.margin.left)))];

    if (rect_width > 0) {
      this.graph.rectangular_selection.attr('width', rect_width);
      energy2 = power2 ? power2.values.energy : 0;
      energy = power ? power.values.energy : (energy2 === 0) ? 0 : this.energy;
      text_x_coordinate = this.graph.rectangular_selection_x_coordinate;
      text_y_coordinate = this.graph.margin.top - 10;
      this.selected_region_energy = energy - energy2;
    } else {
      this.graph.rectangular_selection
        .attr('x', this.graph.rectangular_selection_x_coordinate - this.graph.margin.left - Math.abs(rect_width))
        .attr('width', Math.abs(rect_width));
      energy = power ? power.values.energy : 0;
      energy2 = power2 ? power2.values.energy : (energy === 0) ? 0 : this.energy;
      text_x_coordinate = this.graph.rectangular_selection_x_coordinate - Math.abs(rect_width);
      text_y_coordinate = this.graph.margin.top - 10;
      this.selected_region_energy = energy2 - energy;
    }
    this.graph.rectangular_selection_text = this.graph.svg.append('text').text('ENERGY : ' + this.selected_region_energy)
      .attr('x', text_x_coordinate)
      .attr('y', text_y_coordinate)
      .attr('class', 'energy-text')
      .attr('font-weight', 'bold');

  }
  onDragEnd() {
    if (this.graph.rectangular_selection_x_coordinate === d3.event.x) {
      this.graph.rectangular_selection.remove();
      if (this.graph.rectangular_selection_text) {
        this.graph.rectangular_selection_text.remove();
      }
      this.selected_region_energy = undefined;
    } else {

    }
  }

  initZoomEvent() {
    this.graph.zoomed_x_scale = d3.scaleTime().rangeRound([0, this.graph.width]).domain(this.graph.x_scale.domain());

    this.graph.svg.call(d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [this.graph.width, this.graph.height]])
      .extent([[0, 0], [this.graph.width, this.graph.height]])
      .on('zoom', () => this.onZoom()))
      .on('dblclick.zoom', null);
  }

  onZoom() {
    this.graph.transform_state = d3.event.transform;

    this.graph.x_scale.domain(this.graph.transform_state.rescaleX(this.graph.zoomed_x_scale).domain());
    this.graph.parent_group.select('.x-axis').call(d3.axisBottom(this.graph.x_scale));
    this.graph.parent_group.select('.line').attr('d', this.graph.line);
  }


  setXYScale() {
    this.graph.x_scale = d3.scaleTime().domain([new Date().setHours(0, 0, 0, 0),
      new Date().setHours(0, 0, 0, 0) + (24 * 60 * 60 * 1000)]).rangeRound([0, this.graph.width]);
    this.graph.y_scale = d3.scaleLinear().domain(d3.extent(this.graph.data, (d) => d.values.power)).rangeRound([this.graph.height, 0]);
  }

  drawXYAxis() {
    this.graph.y_axis = this.graph.parent_group.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(this.graph.y_scale))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Power');

    this.graph.x_axis = this.graph.parent_group.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + this.graph.height + ')')
      .call(d3.axisBottom(this.graph.x_scale))
      .select('.domain')
      .remove();
  }

  drawLineGraph() {
    this.graph.svg.append('defs')
      .append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', this.graph.width)
      .attr('height', this.graph.height);

    this.graph.line = d3.line()
      .x((d: any) => this.graph.x_scale(d.time))
      .y((d: any) => this.graph.y_scale(d.values.power));

    this.graph.parent_group.append('path')
      .datum(this.graph.data)
      .attr('clip-path', 'url(#clip)')
      .attr('class', 'line')
      .attr('fill', 'transparent')
      .attr('stroke', '#3f873a')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', this.graph.line);
  }

}
