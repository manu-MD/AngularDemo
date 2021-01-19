import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueHomePageComponent } from './marque-home-page/marque-home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";

const routes: Routes = [
  {
    path: '',
    component: MarqueHomePageComponent
  }
];

@NgModule({
  declarations: [
    MarqueHomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    RouterModule
  ]
})
export class MarqueModule { }
