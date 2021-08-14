import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';

import { PersonalizadoService } from 'app/personalizado/personalizado.service';

import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CamposService } from '../campos.service';
export interface Item { id: any; name: any; }
export interface Emails { email: any };
export interface Campos { id: any; };

@Component({
  selector: 'default_campos',
  templateUrl: './default_campos.component.html',
  styleUrls: ['./default_campos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Default_Campos implements OnInit {


  constructor(
    ) {


  }

  /**
   * On init
   */
  ngOnInit(): void {
    
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    
  }
}
