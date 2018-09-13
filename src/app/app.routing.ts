import {Route} from '@angular/router';
import {TaskComponent} from './task/task.component';
import {TaskResolver} from './task/task-resolver.service';

export const app_routes: Route[] = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: TaskComponent,
    resolve: {power: TaskResolver}
  }
];
