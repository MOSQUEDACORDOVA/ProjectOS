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

  constructor(public PersonalizadoService: PersonalizadoService, @Inject(DOCUMENT) private document: any, private modalService: NgbModal) { }
  
  ngOnInit(): void {
    if(DOM_PA=="localhost" && sessionStorage.getItem('SS_proyecto_actual')==null){
      this.document.getElementById('VE_PA').click(true);
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
    location.reload();
  }

}
