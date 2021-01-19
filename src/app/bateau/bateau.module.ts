import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BateauComponent } from './components/bateau/bateau.component';
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";

const routes: Routes = [
  {
    path: '',
    component: BateauComponent
  }
];

@NgModule({
  declarations: [
    BateauComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    RouterModule
  ]
})
export class BateauModule { }
