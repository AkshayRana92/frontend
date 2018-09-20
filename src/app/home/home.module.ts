import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { TaskFirstComponent } from './task-first/task-first.component';
import { TaskSecondComponent } from './task-second/task-second.component';
import { RouterModule } from '@angular/router';
import { GraphModule } from '../graph/graph.module';
import { home_routes } from './home.routing';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GraphModule,
    RouterModule.forChild(home_routes),
    AngularDateTimePickerModule
  ],
  declarations: [HomeComponent, TaskFirstComponent, TaskSecondComponent]
})
export class HomeModule { }
