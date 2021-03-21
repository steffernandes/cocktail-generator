import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkDetailsPage } from './drink-details.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkDetailsPageRoutingModule {}
