import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  startLoading() {
    document.getElementById('preloader').style.display = 'block';
  }

  stopLoading() {
    document.getElementById('preloader').style.display = 'none';
  }
}
