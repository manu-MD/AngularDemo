import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListeComponent } from './user-liste/user-liste.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserPageLoginComponent } from './user-page-login/user-page-login.component';
import { UserPageInscriptionComponent } from './user-page-inscription/user-page-inscription.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    UserPageComponent,
    UserFormComponent,
    UserListeComponent,
    UserPageLoginComponent,
    UserPageInscriptionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatCardModule
  ],
})
export class UserModule { }
