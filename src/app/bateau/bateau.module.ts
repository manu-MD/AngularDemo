import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BateauComponent } from './components/bateau/bateau.component';
import {MatCardModule} from "@angular/material/card";

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
        MatCardModule
    ],
  exports: [
    RouterModule
  ]
})
export class BateauModule { }
