import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import { CoreTranslationService } from '@core/services/translation.service';

import { locale as german } from './i18n/de';
import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';
import { locale as portuguese } from './i18n/pt';

import { AuthenticationService } from 'app/auth/service';

import { PersonalizadoService } from 'app/personalizado/personalizado.service';

//FIREBASE
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatatablesComponent implements OnInit {

  
  // Private
  private _unsubscribeAll: Subject<any>;
  private tempData = [];

  public isPYT_21_Admin: boolean;
  
  // public
  public contentHeader: object;
  public rows: any;
  public selected = [];
  public kitchenSinkRows: any;
  public PRUEBAkitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;
  public nombre_completo;
  public mi_sucursal=sessionStorage.getItem('pyt4_sucursal');

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * For ref only, log activate events
   *
   * @param selected
   */
  onActivate(event) {
    // console.log('Activate Event', event);
  }

  /**
   * Constructor
   *
   * @param {DatatablesService} _datatablesService
   * @param {CoreTranslationService} _coreTranslationService
   */

   items: Observable<any[]>;
   descartados: Observable<any[]>;

  constructor(
    private _coreTranslationService: CoreTranslationService,
    public firestore: AngularFirestore,
    private _authenticationService: AuthenticationService
    ) {
      this.isPYT_21_Admin = this._authenticationService.isPYT_21_Admin;

    this._unsubscribeAll = new Subject();
    this._coreTranslationService.translate(english, french, german, portuguese);
    //si es director o logistica consulta todas las sucursales
    //sino entonces solo puede ver su sucursal
    this.items = firestore.collection('usuarios', ref => ref.where('role', '==', 'Cliente')).valueChanges({ idField: 'IdDocumento' });
    
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  eliminar_usuario(IdDocumento){
    this.firestore.collection('usuarios').doc(IdDocumento).delete();
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  /**
   * On init
   */
  ngOnInit() {

  }
}
