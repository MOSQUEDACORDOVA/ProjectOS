import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CsvModule } from '@ctrl/ngx-csv';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CoreCommonModule } from '@core/common.module';

import { DatatablesService } from './datatables.service';

//SEGURIDAD
import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: 'pyt_21_usuarios',
    canActivate: [AuthGuard],
    component: UsuariosComponent,
    data: { 
      roles: [
        Role.PYT_21_Admin,
        Role.PYT_21_Inversor
      ], 
      animation: 'datatables' },
      resolve: {
        datatables: DatatablesService
      }
  }
];

@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    NgbModule,
    TranslateModule,
    CoreCommonModule,
    NgxDatatableModule,
    CsvModule
  ],
  providers: [DatatablesService]
})
export class UsuariosModule { }
