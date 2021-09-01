import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import { CoreTranslationService } from '@core/services/translation.service';

import { DatatablesService } from './datatables.service';

@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['./depositos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DepositosComponent implements OnInit {
   // Private
   private _unsubscribeAll: Subject<any>;
   private tempData = [];
 
   // public
   public contentHeader: object;
   public rows: any;
   public selected = [];
   public kitchenSinkRows: any;
   public basicSelectedOption: number = 10;
   public ColumnMode = ColumnMode;
 
 
   @ViewChild(DatatableComponent) table: DatatableComponent;
   @ViewChild('tableRowDetails') tableRowDetails: any;

  constructor(private _datatablesService: DatatablesService, private _coreTranslationService: CoreTranslationService) {
    this._unsubscribeAll = new Subject();
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
   * For ref only, log activate events
   *
   * @param selected
   */
   onActivate(event) {
    // console.log('Activate Event', event);
  }

  ngOnInit(): void {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
      this.kitchenSinkRows = this.rows;

    });
  }

}
