import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from './task.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  private timer: any;
  graph = {
    data: undefined,
    x_scale: undefined,
    y_scale: undefined,
    x_axis: undefined,
    y_axis: undefined,
    svg: undefined,
    parent_group: undefined,
    width: undefined,
    height: undefined,
    x2: undefined,
    transform_state: undefined,
    line: undefined
  };
  constructor(private route: ActivatedRoute, private service: TaskService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: any) => {
        this.graph.data = data.power;
        this.initChartWithData();

      });

    this.timer = setInterval(() => {
      this.service.getLastPowerReading()
        .subscribe(power => {
          // console.log(power.values.energy - this.graph.data[0].values.energy);
          this.updateGraphData(power);

          if (this.graph.transform_state) {
            console.log('if')
            this.graph.x_scale.domain(this.graph.transform_state.rescaleX(this.graph.x2).domain());
            const x_axis = d3.axisBottom(this.graph.x_scale);
            this.graph.parent_group.select('.x-axis').call(x_axis);
          } else {
            console.log('else')

            this.setXYScale();

            this.graph.svg.select('.x-axis').call(d3.axisBottom(this.graph.x_scale));
            this.graph.svg.select('.y-axis').call(d3.axisLeft(this.graph.y_scale));
          }

          this.graph.parent_group.select('.line').attr('d', this.graph.line);



        });
    }, 2000);
  }

  updateGraphData(newPower: any) {
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

  initChartWithData() {
    const svgWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 650), svgHeight = 400;
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    this.graph.width = svgWidth - margin.left - margin.right;
    this.graph.height = svgHeight - margin.top - margin.bottom;
    this.graph.svg = d3.select('svg')
      .attr('width', this.graph.width)
      .attr('height', svgHeight);

    this.graph.parent_group = this.graph.svg.append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')'
      )
      .attr('pointer-events', 'all');

    this.setXYScale();
    const x_axis = d3.axisBottom(this.graph.x_scale);
    this.graph.x2 = d3.scaleTime().rangeRound([0, this.graph.width]);
    this.graph.x2.domain(this.graph.x_scale.domain());

    const zoom = this.graph.svg.call(d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [this.graph.width, this.graph.height]])
      .extent([[0, 0], [this.graph.width, this.graph.height]])
      .on('zoom', () => {
        // clearInterval(this.timer);
        this.graph.transform_state = d3.event.transform;
        this.graph.x_scale.domain(this.graph.transform_state.rescaleX(this.graph.x2).domain());
        this.graph.parent_group.select('.x-axis').call(x_axis);
        this.graph.parent_group.select('.line').attr('d', this.graph.line);
      }));

     this.graph.parent_group.call(d3.drag().on('start', () => {
       console.log('zzzz');
     }));

    this.drawXYAxis();
    this.drawLine();

    const x = d3.scaleTime()
      .rangeRound([0, this.graph.width]);

    const y = d3.scaleLinear()
      .rangeRound([this.graph.height, 0]);

    const area = d3.area()
      .x((d) => x(d.time))
      .y1((d) => y(d.values.power));
    y.domain([0, d3.max(this.graph.data, function(d) { return d.values.power; })]);
    area.y0(y(0));

    this.graph.parent_group.append('path')
      .datum(this.graph.data)
      .attr('fill', 'steelblue')
      .attr('class', 'area')
      .attr('d', area);
  }

  setXYScale() {
    this.graph.x_scale = d3.scaleTime().domain([new Date().setHours(0, 0, 0, 0), new Date().setHours(23, 59, 59, 999)]).rangeRound([0, this.graph.width]);
    this.graph.y_scale = d3.scaleLinear().domain(d3.extent(this.graph.data, (d) => d.values.power)).rangeRound([this.graph.height, 0]);
  }

  drawXYAxis() {
    this.graph.x_axis = this.graph.parent_group.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + this.graph.height + ')')
      .call(d3.axisBottom(this.graph.x_scale))
      .select('.domain')
      .remove();

    this.graph.y_axis = this.graph.parent_group.append('g')
      .call(d3.axisLeft(this.graph.y_scale))
      .append('text')
      .attr('class', 'y-axis')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Power');
  }

  drawLine() {
    this.graph.line = d3.line()
      .x((d) => this.graph.x_scale(d.time))
      .y((d) => this.graph.y_scale(d.values.power));

    this.graph.parent_group.append('path')
      .datum(this.graph.data)
      .attr('class', 'line')
      .attr('fill', 'transparent')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', this.graph.line);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
