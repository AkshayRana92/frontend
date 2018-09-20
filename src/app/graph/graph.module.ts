import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './line-graph/line-graph.component';
import {D3_TOKEN} from './d3.config';
import * as d3 from 'd3';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{provide: D3_TOKEN, useFactory: () => d3}],
  declarations: [LineGraphComponent],
  exports: [LineGraphComponent]
})
export class GraphModule { }
