import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'poste',
    loadChildren: () => import('./poste/poste.module').then( m => m.PostePageModule)
  },
  {
    path: 'buddybank',
    loadChildren: () => import('./buddybank/buddybank.module').then( m => m.BuddybankPageModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./paypal/paypal.module').then( m => m.PaypalPageModule)
  },
  {
    path: 'contanti',
    loadChildren: () => import('./contanti/contanti.module').then( m => m.ContantiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
