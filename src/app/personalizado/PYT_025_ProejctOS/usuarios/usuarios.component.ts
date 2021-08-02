import { Component, OnInit } from '@angular/core';
//si el componente es exclusivo
import { Router} from '@angular/router';
import { PersonalizadoService } from 'app/personalizado/personalizado.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public exclusivoDE="PYT-25";
  constructor(private _router: Router, private _idproyecto: PersonalizadoService){
    if(this._idproyecto.IDE_PA!=this.exclusivoDE){
      this._router.navigate(['/pages/miscellaneous/not-authorized']);
    }
  }

  ngOnInit() {
  }

}
