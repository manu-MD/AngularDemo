import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageInscriptionComponent } from './user-page-inscription/user-page-inscription.component';
import { UserPageLoginComponent } from './user-page-login/user-page-login.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageLoginComponent
  },
  {
    path: 'inscription',
    component: UserPageInscriptionComponent
  },
  {
    path: 'login',
    component: UserPageLoginComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }