import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamionComponent } from './camion.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";

const routes: Routes = [
  {
    path: '',
    component: CamionComponent
  }
];

@NgModule({
  declarations: [
    CamionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
RouterModule
  ]
})

export class CamionModule { }
