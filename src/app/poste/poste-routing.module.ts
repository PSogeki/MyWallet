import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostePage } from './poste.page';

const routes: Routes = [
  {
    path: '',
    component: PostePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostePageRoutingModule {}
