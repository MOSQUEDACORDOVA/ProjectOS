import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IngresosEgresosComponent } from './ingresos-egresos.component';

const routes: Routes = [
  {
    path: 'pyt_4_ingresos_egresos',
    component: IngresosEgresosComponent,
    data: { animation: 'clipboard' }
  }
];

@NgModule({
  declarations: [IngresosEgresosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IngresosEgresosModule { }
