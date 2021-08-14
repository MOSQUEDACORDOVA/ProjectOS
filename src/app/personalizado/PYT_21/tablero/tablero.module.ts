import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { TableroComponent } from 'app/personalizado/PYT_21/tablero/tablero.component';

import { ChartsModule } from 'ng2-charts';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

const routes: Routes = [
  {
    path: 'pyt_21_tablero',
    component: TableroComponent,
    data: { animation: 'chartJS, clipboard, statistics' }
  }
];

@NgModule({
  declarations: [
    TableroComponent
  ],
  imports: [
    CommonModule,CoreCommonModule,RouterModule.forChild(routes),NgbModule,ChartsModule,Ng2FlatpickrModule
  ]
})
export class TableroModule {
  
 }
