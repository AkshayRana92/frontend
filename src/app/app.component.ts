import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart_data;

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(data => this.initChartWithData(data));
  }

  initChartWithData(data: any) {
    const svgWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 650), svgHeight = 400;
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    const svg = d3.select('svg')
      .attr('width', width)
      .attr('height', svgHeight);

    const g = svg.append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')'
      )
      .attr('pointer-events', 'all');

    const x = d3.scaleTime().domain(d3.extent(data, (d) => d.time)).rangeRound([0, width]);
    const y = d3.scaleLinear().domain(d3.extent(data, (d) => d.values.power)).rangeRound([height, 0]);
    const x_axis = d3.axisBottom(x);
    const x2 = d3.scaleTime().rangeRound([0, width]);
    x2.domain(x.domain());

    const line = d3.line()
      .x((d) => x(d.time))
      .y((d) => y(d.values.power));

    const zoom = svg.call(d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on('zoom', () => {
        const transform_state = d3.event.transform;
        console.log(transform_state);
        const xNewScale = transform_state.rescaleX(x);

        x.domain(transform_state.rescaleX(x2).domain());
        g.select('.line').attr('d', line);
        g.select('.x-axis').call(x_axis);
      }));

    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      .select('.domain')
      .remove();

    g.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Power');

    g.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('fill', 'transparent')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', line);


  }

  zoomed() {

  }
}
