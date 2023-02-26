import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuddybankPage } from './buddybank.page';

const routes: Routes = [
  {
    path: '',
    component: BuddybankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuddybankPageRoutingModule {}
