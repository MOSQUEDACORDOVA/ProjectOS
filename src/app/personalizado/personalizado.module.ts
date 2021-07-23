import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

//aquí añades las direcciones o rutas
const routes = [
  {
    path: '',
    component: InicioComponent
  },
];

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PersonalizadoModule { }
