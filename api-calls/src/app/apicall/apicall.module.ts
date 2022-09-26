import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApicallPageRoutingModule } from './apicall-routing.module';

import { ApicallPage } from './apicall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApicallPageRoutingModule
  ],
  declarations: [ApicallPage]
})
export class ApicallPageModule {}
