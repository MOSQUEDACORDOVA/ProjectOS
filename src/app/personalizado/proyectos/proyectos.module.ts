import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CsvModule } from '@ctrl/ngx-csv';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreCardModule } from '@core/components/core-card/core-card.module';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ProyectosComponent } from './proyectos.component';
import { DatatablesService } from './datatables.service';

const routes: Routes = [
  {
    path: 'proyectos',
    component: ProyectosComponent,
    resolve: {
      datatables: DatatablesService
    },
    data: { animation: 'datatables' }
  }
];

@NgModule({
  declarations: [ProyectosComponent],
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    TranslateModule,
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule,
    NgxDatatableModule,
    CsvModule,CoreCardModule
  ],
  providers: [DatatablesService]
})
export class ProyectosModule {}
