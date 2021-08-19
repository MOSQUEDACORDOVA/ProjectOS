import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero.component';

import { CoreCommonModule } from '@core/common.module';

const routes: Routes = [
  {
    path: 'pyt_4_tablero',
    component: TableroComponent,
    data: { animation: 'clipboard' }
  }
];

@NgModule({
  declarations: [TableroComponent],
  imports: [
    CommonModule,CoreCommonModule,RouterModule.forChild(routes),NgbModule
  ]
})
export class TableroModule { }
