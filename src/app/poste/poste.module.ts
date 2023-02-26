import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostePageRoutingModule } from './poste-routing.module';

import { PostePage } from './poste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostePageRoutingModule
  ],
  declarations: [PostePage]
})
export class PostePageModule {}
