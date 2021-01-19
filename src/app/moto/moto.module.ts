import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MotoFormComponent } from './components/moto-form/moto-form.component';
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {
    path: '',
    component: MotoFormComponent
  },
];

@NgModule({
  declarations: [
    MotoFormComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatCardModule
    ],
  exports: [
    RouterModule
  ]
})
export class MotoModule { }
