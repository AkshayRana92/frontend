import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';


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
    // this.service.getData().subscribe(data => this.initChartWithData(data));
  }


  zoomed() {

  }
}
