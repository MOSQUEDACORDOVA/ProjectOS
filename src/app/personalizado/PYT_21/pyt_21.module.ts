import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableroModule } from './tablero/tablero.module';
import { ContratosModule } from './contratos/contratos.module';
import { IngresosModule } from './ingresos/ingresos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DepositosModule } from './depositos/depositos.module';




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
    CommonModule,RouterModule.forChild(routes),TableroModule,ContratosModule,IngresosModule,UsuariosModule,DepositosModule
  ]
})
export class Pyt_21_Module { 
  
}
