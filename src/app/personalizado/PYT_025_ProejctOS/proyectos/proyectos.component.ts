import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/auth/service';
import { ProyectosService } from './proyectos.service';
@Component({
  selector: 'app-datatables',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  public isPM: boolean;
  constructor(public ProyectosService: ProyectosService,private _authenticationService: AuthenticationService) { 
    this.isPM = this._authenticationService.isPM;
  }

  ngOnInit() {

  }
}