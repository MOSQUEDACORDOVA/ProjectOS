import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../proyectos.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  constructor(public ProyectosService: ProyectosService) { 

  }

  ngOnInit() {
  }

}
