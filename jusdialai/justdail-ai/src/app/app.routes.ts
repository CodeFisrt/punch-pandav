import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path: '' , component: HeaderComponent},  
    {path: 'data-bindimg' , component: DataBindingComponent},  
    {path: 'directive' , component: DirectivesComponent},  


]
