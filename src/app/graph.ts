import {ScaleLinear, ScaleTime} from 'd3-scale';
import {BaseType, Selection} from 'd3-selection';
import {Power} from './power';
import {ZoomTransform} from 'd3-zoom';
import {Line} from 'd3-shape';

export class Graph {
  data: Power[];
  x_scale: ScaleTime<number, number>;
  y_scale: ScaleLinear<number, number>;
  x_axis: Selection<BaseType, any, HTMLElement, any>;;
  y_axis: Selection<BaseType, any, HTMLElement, any>;;
  svg: Selection<BaseType, any, HTMLElement, any>;
  parent_group: Selection<BaseType, any, HTMLElement, any>;
  width: number;
  height: number;
  zoomed_x_scale: any;
  transform_state: ZoomTransform;
  line: any;
  area: any;
  margin: Margin;
  rectangular_selection: Selection<BaseType, any, HTMLElement, any>;
  rectangular_selection_text: Selection<BaseType, any, HTMLElement, any>;
  rectangular_selection_x_coordinate: number;
}

interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
