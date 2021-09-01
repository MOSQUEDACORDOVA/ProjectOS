import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'pyt-4-registrar-pedido',
  templateUrl: './modals.component.html'
})
export class PYT_4_Registrar_Pedido_ModalsComponent implements OnInit {
  // public
  public contentHeader: object;


  /**
   * Constructor
   *
   * @param {NgbModal} modalService
   */
  constructor(private modalService: NgbModal) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------


  // modal Open Form
  modalOpenForm(modalForm) {
    this.modalService.open(modalForm);
  }


  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    
  }
}
