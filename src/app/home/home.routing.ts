import {HomeComponent} from './home/home.component';
import {Route} from '@angular/router';
import {TaskFirstComponent} from './task-first/task-first.component';
import {TaskSecondComponent} from './task-second/task-second.component';
import {TaskResolver} from './task-resolver.service';

export const home_routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'task/1',
    component: TaskFirstComponent,
    resolve: {powerData: TaskResolver}
  },
  {
    path: 'task/2',
    component: TaskSecondComponent,
    resolve: {powerData: TaskResolver}
  },
];
