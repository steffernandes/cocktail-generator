import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkDetailsPageRoutingModule } from './drink-details-routing.module';

import { DrinkDetailsPage } from './drink-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkDetailsPageRoutingModule
  ],
  declarations: [DrinkDetailsPage]
})
export class DrinkDetailsPageModule {}
