import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CouleurHomePageComponent} from './couleur-home-page/couleur-home-page.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";

const routes: Routes = [
  {
    path: '',
    component: CouleurHomePageComponent
  }
];

@NgModule({
  declarations: [
    CouleurHomePageComponent,
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
export class CouleurModule { }
