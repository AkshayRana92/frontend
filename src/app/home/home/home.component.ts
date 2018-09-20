import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoaderService} from '../../shared/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private loader: LoaderService) { }

  goTo(route: string) {
    this.loader.startLoading();
    this.router.navigate([route]);
  }
}
