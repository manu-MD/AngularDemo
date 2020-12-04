import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from './is-loggued.guard';
import { LayoutInComponent } from './shared/layout-in/layout-in.component';
import { LayoutOutComponent } from './shared/layout-out/layout-out.component';
import { LogOutComponent } from './shared/log-out/log-out.component';

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
    canActivate: [
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
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }