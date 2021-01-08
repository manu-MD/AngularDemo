import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from './is-loggued.guard';
import { LayoutInComponent } from './shared/layout-in/layout-in.component';
import { LayoutOutComponent } from './shared/layout-out/layout-out.component';
import { LogOutComponent } from './shared/log-out/log-out.component';
import {AuthGuard} from './auth.guard';
import {Role} from './user/interfaces/user.interface';

const routes: Routes = [

  {
    path:'',
    component: LayoutOutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./landings-page/landings-page.module').then(m => m.LandingsPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
    ]
  },

  {
    path: 'logout',
    component: LogOutComponent
  },

  {
    path:'in',
    component: LayoutInComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    canActivateChild: [
      IsSignedInGuard
    ],
    children: [
      {
        path: '',
        loadChildren: () => import('./voiture/voiture.module').then(m => m.VoitureModule),
      },

      {
        path: 'moto',
        loadChildren: () => import('./moto/moto.module').then(m => m.MotoModule),
      },

      {
        path: 'bateau',
        loadChildren: () => import('./bateau/bateau.module').then(m => m.BateauModule),
      },

      {
        path: 'camion',
        loadChildren: () => import('./camion/camion.module').then(m => m.CamionModule),
      },

      {
        path: 'marque',
        loadChildren: () => import('./marque/marque.module').then(m => m.MarqueModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },
      {
        path: 'couleur',
        loadChildren: () => import('./couleur/couleur.module').then(m => m.CouleurModule),
      }
    ]
  },

  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  // },
  // {
  //   path: 'voiture',
  //   loadChildren: () => import('./voiture/voiture.module').then(m => m.VoitureModule),
  //   canActivate: [
  //     IsSignedInGuard
  //   ]
  // // },
  // {
  //   path: 'moto',
  //   loadChildren: () => import('./moto/moto.module').then(m => m.MotoModule),
  //   canActivate: [
  //     IsSignedInGuard
  //   ]
  // },
  // {
  //   path: 'bateau',
  //   loadChildren: () => import('./bateau/bateau.module').then(m => m.BateauModule),
  //   canActivate: [
  //     IsSignedInGuard
  //   ]
  // },
  // {
  //   path: 'camion',
  //   loadChildren: () => import('./camion/camion.module').then(m => m.CamionModule),
  //   canActivate: [
  //     IsSignedInGuard
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
