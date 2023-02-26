import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuddybankPageRoutingModule } from './buddybank-routing.module';

import { BuddybankPage } from './buddybank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuddybankPageRoutingModule
  ],
  declarations: [BuddybankPage]
})
export class BuddybankPageModule {}
