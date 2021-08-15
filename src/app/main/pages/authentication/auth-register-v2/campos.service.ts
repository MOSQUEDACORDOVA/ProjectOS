import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'app/auth/service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

export interface Item { id: any; name: any; }
export interface Campos_pyt4 {
  id: any; 
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: any;
  proyecto: string;
    
  //los campos personalizados tienen el prefijo pty(ID del proyecto eje: pty4_campo_personalizado)
  ciudad: string,
  estado: string,

  pyt4_fraccionamiento: string,

  pyt4_coto: string,
  casa: string,
  calle: string,
  avenida: string,
  referencia: string,
  telefono: string,

  pyt4_nombre_familiar_1: string,
  pyt4_apellido_familiar_1: string,
  pyt4_telefono_familiar_1: string,
  pyt4_nombre_familiar_2: string,
  pyt4_apellido_familiar_2: string,
  pyt4_telefono_familiar_2: string,
  pyt4_rfc: string,

  codigo_postal: string,

  pyt4_tipo_cliente: string,
  pyt4_cliente_nuevo: string,
  pyt4_fecha_ultimo_pedido: string,

  estatus?: string,
  };
@Injectable({
  providedIn: 'root'
})
export class CamposService {
  private Usuarios: AngularFirestoreCollection<Campos_pyt4>;
  public returnUrl: string;
  public loquesea="aaa";
  constructor(
    private readonly afs: AngularFirestore,
    public _authenticationService: AuthenticationService,
    private _route: ActivatedRoute,
    public _router: Router,
    ) {  

  }
  //FIREBASE
  registrarUsuario_pyt4(
    id: any, 
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar: string,
    role: any,
    proyecto: string,
    
    //los campos personalizados tienen el prefijo pty(ID del proyecto eje: pty4_campo_personalizado)
    ciudad: string,
    estado: string,

    pyt4_fraccionamiento: string,

    pyt4_coto: string,
    casa: string,
    calle: string,
    avenida: string,
    referencia: string,
    telefono: string,

    pyt4_nombre_familiar_1: string,
    pyt4_apellido_familiar_1: string,
    pyt4_telefono_familiar_1: string,
    pyt4_nombre_familiar_2: string,
    pyt4_apellido_familiar_2: string,
    pyt4_telefono_familiar_2: string,
    pyt4_rfc: string,

    codigo_postal: string,

    pyt4_tipo_cliente: string,
    pyt4_cliente_nuevo: string,
    pyt4_fecha_ultimo_pedido: string,

    estatus?: string,
  ){
    this.Usuarios = this.afs.collection<Campos_pyt4>('usuarios');
    const campos: Campos_pyt4 = { 
      id,
      email,
      password,
      firstName,
      lastName,
      avatar,
      role,
      proyecto,

    //los campos personalizados tienen el prefijo pty(ID del proyecto eje: pty4_campo_personalizado)
      ciudad,
      estado,

      pyt4_fraccionamiento,

      pyt4_coto,
      casa,
      calle,
      avenida,
      referencia,
      telefono,

      pyt4_nombre_familiar_1,
      pyt4_apellido_familiar_1,
      pyt4_telefono_familiar_1,
      pyt4_nombre_familiar_2,
      pyt4_apellido_familiar_2,
      pyt4_telefono_familiar_2,
      pyt4_rfc,

      codigo_postal,

      pyt4_tipo_cliente,
      pyt4_cliente_nuevo,
      pyt4_fecha_ultimo_pedido,

      estatus
    };
    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    
    this.Usuarios.doc().set(campos).finally(()=>{
      this._authenticationService
            .login(campos.email, campos.password)
            .pipe(first())
            .subscribe(
              data => { 
                this._router.navigate([this.returnUrl]);
              },
              error => {
                alert(error);

              }
            );
    });
  }
}