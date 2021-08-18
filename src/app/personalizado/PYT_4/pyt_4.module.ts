import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableroModule } from './tablero/tablero.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { Pyt_4_Service } from './pyt_4.service';


//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'environments/environment';

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
    UsuariosModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
  ]
})
export class Pyt_4_Module { 
  constructor(public Pyt_4_Service: Pyt_4_Service){
    
  }
}
