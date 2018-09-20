import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, LoaderComponent],
  exports: [HeaderComponent, LoaderComponent]
})
export class SharedModule { }
