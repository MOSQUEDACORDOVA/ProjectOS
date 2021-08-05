import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';
import { DOM_PA, PersonalizadoService } from '../personalizado.service';
@Component({
  selector: 'app-selector-pa',
  templateUrl: './selector-pa.component.html',
  styleUrls: ['./selector-pa.component.scss']
})
export class SelectorPAComponent implements OnInit {
  public dominio_actual: string;
  constructor(public PersonalizadoService: PersonalizadoService, @Inject(DOCUMENT) private document: any, private modalService: NgbModal) {
    if(DOM_PA=="localhost" || DOM_PA=="projectos-666.web.app"){
      this.dominio_actual="desarrollo";
    }
  }
  ngOnInit(): void {
    
    if(this.dominio_actual=="desarrollo" && sessionStorage.getItem('SS_proyecto_actual')==null){
      this.document.getElementById('VE_PA').click(true);
    }else{
      switch(DOM_PA){
        case 'pyt21.mosquedacordova.com' || 'cbfcapital.com': 
        this.seleccionarProyectoActual('PYT-21');
        break
        case 'pyt24.mosquedacordova.com' || 'minner.com': 
        this.seleccionarProyectoActual('PYT-24');
        break
      }
      //this.seleccionarProyectoActual(id_proyecto_actual);
      //el problema de hacerlo así es que primero carga todo y luego se vuelve a cargar con los componentes del proyecto seleccionado (luego debemos solucionarlo)
    }
  }
  // modal Open Vertically Centered
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }
  seleccionarProyectoActual(id_proyecto_actual){
    sessionStorage.setItem('SS_proyecto_actual', id_proyecto_actual);
    this.PersonalizadoService.SeleccionarProyecto();
    if(this.dominio_actual=="desarrollo"){
      location.reload();
    }
  }

}
