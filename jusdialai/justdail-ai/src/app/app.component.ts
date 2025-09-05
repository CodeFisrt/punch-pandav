import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from "../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor,DataBindingComponent,DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'justdail-ai';
  a = [1, 2, 3, 4, 5];
  b={name:"Gorakh", age:24, city:"Pune"}
  
}
