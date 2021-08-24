import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosComponent } from './contratos.component';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CsvModule } from '@ctrl/ngx-csv';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreCardModule } from '@core/components/core-card/core-card.module';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { DatatablesComponent } from './listado/datatables.component';
import { ModalsComponent } from './modals_usuario/modals.component';

//CAMPOS ESPECIALES
import { NgxMaskModule } from 'ngx-mask';

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'environments/environment';

import { ToastrModule } from 'ngx-toastr';

//SEGURIDAD
import { AuthGuard } from 'app/auth/helpers';
import { Role } from 'app/auth/models';

const routes: Routes = [
  {
    path: 'pyt_21_contratos',
    canActivate: [AuthGuard],
    component: ContratosComponent,
    data: { 
      roles: [
        Role.PYT_21_Admin,
        Role.PYT_21_Inversor
      ], 
      animation: 'datatables' }
  }
];


@NgModule({
  declarations: [
    ContratosComponent,DatatablesComponent,ModalsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgbModule,
    TranslateModule,
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule,
    NgxDatatableModule,
    CsvModule,CoreCardModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    NgxMaskModule.forRoot(),
    ToastrModule
  ],
  providers: []
})
export class ContratosModule { 
  
}