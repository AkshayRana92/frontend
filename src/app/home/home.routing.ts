import {HomeComponent} from './home/home.component';
import {Route} from '@angular/router';
import {TaskFirstComponent} from './task-first/task-first.component';
import {TaskSecondComponent} from './task-second/task-second.component';

export const app_routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'task/1',
    component: TaskFirstComponent
  },
  {
    path: 'task/2',
    component: TaskSecondComponent
  },
];
