import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FieldColorComponent } from './field-color/field-color.component';
import { FieldMarqueComponent } from './field-marque/field-marque.component';
import { FieldTypeComponent } from './field-type/field-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { LayoutInComponent } from './layout-in/layout-in.component';
import { LayoutOutComponent } from './layout-out/layout-out.component';
import { RouterModule } from '@angular/router';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginInUserComponent } from './login-in-user/login-in-user.component';

@NgModule({
  declarations: [
    FieldColorComponent,
    FieldMarqueComponent,
    FieldTypeComponent,
    LayoutInComponent,
    LayoutOutComponent,
    LogOutComponent,
    LoginInUserComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FieldColorComponent,
    FieldMarqueComponent,
    FieldTypeComponent,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule

  ]
})
export class SharedModule {
}
