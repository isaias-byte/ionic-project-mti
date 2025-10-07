import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSummaryPage } from './tab-summary.page';

const routes: Routes = [
  {
    path: '',
    component: TabSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSummaryPageRoutingModule {}
