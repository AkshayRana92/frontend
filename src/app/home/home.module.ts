import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { TaskFirstComponent } from './task-first/task-first.component';
import { TaskSecondComponent } from './task-second/task-second.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomeComponent, TaskFirstComponent, TaskSecondComponent]
})
export class HomeModule { }
