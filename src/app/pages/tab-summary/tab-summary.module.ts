import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSummaryPageRoutingModule } from './tab-summary-routing.module';

import { TabSummaryPage } from './tab-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSummaryPageRoutingModule
  ],
  declarations: [TabSummaryPage]
})
export class TabSummaryPageModule {}
