import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageInscriptionComponent } from './user-page-inscription/user-page-inscription.component';
import { UserPageLoginComponent } from './user-page-login/user-page-login.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserPageLoginComponent
  },
  {
    path: 'inscription',
    component: UserPageInscriptionComponent
  },
  {
    path: '',
    component: UserPageComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }