import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabArchitecturePageRoutingModule } from './tab-architecture-routing.module';

import { TabArchitecturePage } from './tab-architecture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabArchitecturePageRoutingModule
  ],
  declarations: [TabArchitecturePage]
})
export class TabArchitecturePageModule {}
