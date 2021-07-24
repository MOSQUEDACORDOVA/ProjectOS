import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProyectosModule } from './proyectos/proyectos.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { DatatablesModule } from './datatables/datatables.module';

//aquí añades las direcciones o rutas
const routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  }
];

@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,DatatablesModule,ProyectosModule,RouterModule.forChild(routes)
  ]
})
export class PersonalizadoModule { }
