import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
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
//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'environments/environment';

const routes: Routes = [
  {
    path: 'pyt_4_usuarios',
    component: UsuariosComponent,
    data: { animation: 'datatables' }
  }
];


@NgModule({
  declarations: [
    UsuariosComponent,DatatablesComponent
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
    AngularFirestoreModule
  ],
  providers: []
})
export class UsuariosModule { 
  
}