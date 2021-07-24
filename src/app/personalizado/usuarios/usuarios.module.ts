import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule,CommonModule, FormsModule,NgbModule ],
  declarations: [ UsuariosComponent ],
  bootstrap:    [ UsuariosComponent ]
})
export class UsuariosModule { }




