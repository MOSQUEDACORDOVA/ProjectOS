import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit, ViewEncapsulation, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PersonalizadoService } from 'app/personalizado/personalizado.service';

import { AuthenticationService } from 'app/auth/service';

//FIREBASE
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CamposService } from 'app/personalizado/campos.service';
export interface Item { id: any; name: any; }
export interface Emails { email: any };
export interface Campos { id: any; };

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalsComponent implements OnInit {
    @ViewChild("modalForm") modalForm: ElementRef;  
    public modal: NgbModalRef;
    opcionSeleccionado: string  = '0';
    //FIREBASE
    //private itemDoc: AngularFirestoreDocument<Item>;
    //item: Observable<Item>;
    private Emails: AngularFirestoreCollection<Emails>;
    private Usuarios: AngularFirestoreCollection<Campos>;
    Email: Observable<Emails[]>;
    
    // Public
    public isPYT_4_Director: boolean;
    public coreConfig: any;
    public passwordTextType: boolean;
    public registerForm: FormGroup;
    public submitted = false;
    public permitir_envio = false;
    public existencia = false;
    public facturacion =false;
    public mi_sucursal=sessionStorage.getItem('pyt4_sucursal');

    // Private
    private PREFERENCIAS= new PersonalizadoService;

  /**
   * Constructor
   *
   * @param {NgbModal} modalService
   */
  constructor(
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    private readonly afs: AngularFirestore,
    private _CamposService : CamposService,
    private renderer: Renderer2,
    private _authenticationService: AuthenticationService
    ) {
      this.isPYT_4_Director = this._authenticationService.isPYT_4_Director;
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  // modal Open Form
  modalOpenForm(modalForm) {
    this.modal = this.modalService.open(modalForm);    
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });      
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    if(this.opcionSeleccionado=="Negocio" || this.opcionSeleccionado=="Punto de venta"){
      this.facturacion=true;
    }else{
      this.facturacion=false;
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
 
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
    this.Emails = this.afs.collection('usuarios', ref => ref.where('telefono', '==', this.f.telefono.value));
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
        this._CamposService.myCallback = () => {
          this.submitted = false;
          this.modal.close('Accept click');
          this.registerForm.reset();
        }
        //registrar datos
        this._CamposService.registrarUsuario_pyt4(
          'id',
          this.f.email.value,
          this.f.password.value,
          this.f.firstName.value,
          this.f.lastName.value,
          'avatar-s-pyt4.jpg',
          'Cliente',
          'PYT-4',
          this.f.ciudad.value,
          this.f.estado.value,
          this.f.fraccionamiento.value,
          this.f.coto.value,
          this.f.casa.value,
          this.f.calle.value,
          this.f.avenida.value,
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
          this.f.utimos_botellones.value,
          this.f.sucursal.value,
          'activo',
          'app-modals'
        );
      }
    });
  }
}



  /**
   * On init
   */
  ngOnInit(): void {
    
   //declaración de CAMPOS
   this.registerForm = this._formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    ciudad: [[Validators.required]],
    estado: ['Jalisco'],
    fraccionamiento: ['', [Validators.required]],
    coto: [''],
    casa: ['', [Validators.required]],
    calle: ['', [Validators.required]],
    avenida: [''],
    telefono: ['', [Validators.required]],
    nombre_familiar_1: [''],
    apellido_familiar_1: [''],
    telefono_familiar_1: [''],
    nombre_familiar_2: [''],
    apellido_familiar_2: [''],
    telefono_familiar_2: [''],
    rfc: [''],
    codigo_postal: [''],
    tipo_cliente: ['', [Validators.required]],
    cliente_nuevo: [''],
    fecha_ultimo_pedido: [''],
    utimos_botellones: [''],
    sucursal: [this.mi_sucursal],
    email: [''],
    password: ['***************************']
  });
  }
}

