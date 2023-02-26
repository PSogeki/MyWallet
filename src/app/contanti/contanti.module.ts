import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContantiPageRoutingModule } from './contanti-routing.module';

import { ContantiPage } from './contanti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContantiPageRoutingModule
  ],
  declarations: [ContantiPage]
})
export class ContantiPageModule {}
