import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabModelPage } from './tab-model.page';

const routes: Routes = [
  {
    path: '',
    component: TabModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabModelPageRoutingModule {}
