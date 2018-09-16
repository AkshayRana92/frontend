import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PowerService} from '../power.service';
import {Power} from '../../power';

@Component({
  selector: 'app-task-second',
  templateUrl: './task-second.component.html',
  styleUrls: ['./task-second.component.css']
})
export class TaskSecondComponent implements OnInit {

  graphData: Power[];
  newPower: Power;
  timer: any;
  currentDay: number;
  constructor(private route: ActivatedRoute, private powerService: PowerService) {
    this.currentDay = new Date().setHours(0, 0, 0, 0);
  }

  ngOnInit() {
    this.route.data.subscribe((data: {powerData: Power[]}) => {
        this.graphData = data.powerData;
        this.getNewReading();
      });
  }

  getNewReading() {
    this.timer = setInterval(() => {
      const toTime = new Date().getTime();
      const oneDayInMilliSeconds =  24 * 60 * 60 * 1000;

      this.powerService.getLastPowerReading().subscribe((data: Power) => {
        this.newPower = data;
        if (this.newPower.time > (this.currentDay + oneDayInMilliSeconds)) {
          this.currentDay = new Date().setHours(0, 0, 0, 0);
          this.powerService.getPowerReadingsForLastDay(this.currentDay, toTime).subscribe((newPowerData: Power[]) => {
            this.graphData = newPowerData;
          });
        }
      });
    }, 2000);
  }

}
