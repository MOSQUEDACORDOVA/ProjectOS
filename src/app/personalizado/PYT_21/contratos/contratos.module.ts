import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContratosComponent } from './contratos.component';

const routes: Routes = [
  {
    path: 'contratos',
    component: ContratosComponent
  }
];

@NgModule({
  declarations: [
    ContratosComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ContratosModule { }
