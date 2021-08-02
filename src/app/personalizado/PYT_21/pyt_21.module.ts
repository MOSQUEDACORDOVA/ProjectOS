import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableroModule } from './tablero/tablero.module';
import { ContratosModule } from './contratos/contratos.module';

const routes: Routes = [
  {
    path: 'pyt21',
    component: TableroModule
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),TableroModule,ContratosModule
  ]
})
export class Pyt_21_Module { 
  
}
