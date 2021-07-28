import { Component, OnInit } from '@angular/core';
import { ProyectosService } from './proyectos.service';
@Component({
  selector: 'app-datatables',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  constructor(public ProyectosService: ProyectosService) { 
    
  }

  ngOnInit() {

  }
}