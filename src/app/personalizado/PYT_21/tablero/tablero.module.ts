import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './tablero.component';

const routes: Routes = [
  {
    path: 'tablero',
    component: TableroComponent
  }
];

@NgModule({
  declarations: [
    TableroComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class TableroModule { }
