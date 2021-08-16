import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableroModule } from './tablero/tablero.module';
import { UsuariosModule } from './usuarios/usuarios.module';


const routes: Routes = [
  {
    path: 'pyt4',
    component: TableroModule
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableroModule,
    UsuariosModule
  ]
})
export class Pyt_4_Module { }
