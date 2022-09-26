import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApicallPage } from './apicall.page';

const routes: Routes = [
  {
    path: '',
    component: ApicallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApicallPageRoutingModule {}
