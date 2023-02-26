import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContantiPage } from './contanti.page';

const routes: Routes = [
  {
    path: '',
    component: ContantiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContantiPageRoutingModule {}
