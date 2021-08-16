import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PersonalizadoService } from 'app/personalizado/personalizado.service';

//FIREBASE
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CamposService } from '../campos.service';
export interface Item { id: any; name: any; }
export interface Emails { email: any };
export interface Campos { id: any; };

@Component({
  selector: 'pyt_4_campos',
  templateUrl: './pyt_4_campos.component.html',
  styleUrls: ['./pyt_4_campos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Pyt_4_Campos implements OnInit {


   //FIREBASE
  //private itemDoc: AngularFirestoreDocument<Item>;
  //item: Observable<Item>;
  private Emails: AngularFirestoreCollection<Emails>;
  private Usuarios: AngularFirestoreCollection<Campos>;
  Email: Observable<Emails[]>;
  
  // Public
  public coreConfig: any;
  public passwordTextType: boolean;
  public registerForm: FormGroup;
  public submitted = false;
  public permitir_envio = false;
  public existencia = false;

  // Private
  private PREFERENCIAS= new PersonalizadoService;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _formBuilder: FormBuilder,
    private readonly afs: AngularFirestore,
    private _CamposService : CamposService,
    ) {

  }

  crearSessiones(id,email,firstName,lastName,avatar,role,proyecto,password){
    sessionStorage.setItem('aut_id', id);
    sessionStorage.setItem('aut_email', email);
    sessionStorage.setItem('aut_firstName', firstName);
    sessionStorage.setItem('aut_lastName', lastName);
    sessionStorage.setItem('aut_avatar', avatar);
    sessionStorage.setItem('aut_role', role);
    sessionStorage.setItem('aut_proyecto', proyecto);
    sessionStorage.setItem('aut_password', password);
  }

  async fire_datos_recuperados(param){
    return new Promise(resolve =>{
      param.pipe().subscribe((data):any =>{
        console.log(data)
          resolve(data);
      })
    })
  }
  //FIN FIREBASE

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;
    this.existencia=false;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.permitir_envio = false;
      return;
    }else{
      this.permitir_envio = true;
      //verificar si el usuario no existen para poder registrar
      this.Emails = this.afs.collection('usuarios', ref => ref.where('email', '==', this.f.email.value));
      this.Email = this.Emails.valueChanges();
      //this.itemDoc = this.afs.doc<Item>('usuarios/'+this.f.email.value+'');
      //this.item = this.itemDoc.valueChanges();
      this.fire_datos_recuperados(this.Email).then((res)=>{
        var email_respuesta=String(res);
        if(email_respuesta.length>1){ 
          this.permitir_envio = false;
          //LOS DATOS EXISTEN impedir registro
          this.existencia=true;
          return;
        }else{
          //registrar datos e ingresar
          //detectar si requiere registro personalizado
          this.crearSessiones(
            'id',
            this.f.email.value,
            this.f.firstName.value,
            this.f.lastName.value,
            'avatar-s-pyt4.jpg',
            'Cliente',
            this.PREFERENCIAS.IDE_PA,
            this.f.password.value
          );
          if(this.PREFERENCIAS.REGISTRO_PERSONALIZADO){
            switch(this.PREFERENCIAS.IDE_PA){
              case 'PYT-4':
                this._CamposService.registrarUsuario_pyt4(
                  'id',
                  this.f.email.value,
                  this.f.password.value,
                  this.f.firstName.value,
                  this.f.lastName.value,
                  'avatar-s-pyt4.jpg',
                  'Cliente',
                  this.PREFERENCIAS.IDE_PA,
                  this.f.ciudad.value,
                  this.f.estado.value,
                  this.f.fraccionamiento.value,
                  this.f.coto.value,
                  this.f.casa.value,
                  this.f.calle.value,
                  this.f.avenida.value,
                  this.f.referencia.value,
                  this.f.telefono.value,
                  this.f.nombre_familiar_1.value,
                  this.f.apellido_familiar_1.value,
                  this.f.telefono_familiar_1.value,
                  this.f.nombre_familiar_2.value,
                  this.f.apellido_familiar_2.value,
                  this.f.telefono_familiar_2.value,
                  this.f.rfc.value,
                  this.f.codigo_postal.value,
                  this.f.tipo_cliente.value,
                  this.f.cliente_nuevo.value,
                  this.f.fecha_ultimo_pedido.value,
                  this.f.sucursal.value,
                  'activo'
                );
                //si todo está ok que me retorne el ingreso
                break
            }
          }
        }
      });
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    
    //declaración de CAMPOS
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      fraccionamiento: ['', [Validators.required]],
      coto: ['', [Validators.required]],
      casa: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      avenida: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      nombre_familiar_1: ['', [Validators.required]],
      apellido_familiar_1: ['', [Validators.required]],
      telefono_familiar_1: ['', [Validators.required]],
      nombre_familiar_2: [''],
      apellido_familiar_2: [''],
      telefono_familiar_2: [''],
      rfc: ['', [Validators.required]],
      codigo_postal: ['', [Validators.required]],
      tipo_cliente: ['', [Validators.required]],
      cliente_nuevo: [''],
      fecha_ultimo_pedido: [''],
      sucursal: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
