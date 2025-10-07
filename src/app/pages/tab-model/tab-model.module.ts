import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabModelPageRoutingModule } from './tab-model-routing.module';

import { TabModelPage } from './tab-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabModelPageRoutingModule
  ],
  declarations: [TabModelPage]
})
export class TabModelPageModule {}
