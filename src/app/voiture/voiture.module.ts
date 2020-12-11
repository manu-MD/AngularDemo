import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { VoitureComponent } from './components/voiture/voiture.component';
import {MatChipsModule} from "@angular/material/chips";

const routes: Routes = [
  {
    path: '',
    component: VoitureComponent
  }
];

@NgModule({
  declarations: [
    VoitureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatChipsModule
  ],
  exports:[
    RouterModule
  ]

})
export class VoitureModule { }
