import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';

import { PersonalizadoService } from 'app/personalizado/personalizado.service';

import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CamposService } from './campos.service';
export interface Item { id: any; name: any; }
export interface Emails { email: any };
export interface Campos { id: any; };

@Component({
  selector: 'app-auth-register-v2',
  templateUrl: './auth-register-v2.component.html',
  styleUrls: ['./auth-register-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthRegisterV2Component implements OnInit {
  //FIREBASE
  //private itemDoc: AngularFirestoreDocument<Item>;
  //item: Observable<Item>;
  private Emails: AngularFirestoreCollection<Emails>;
  private Usuarios: AngularFirestoreCollection<Campos>;
  Email: Observable<Emails[]>;
  
  // Public
  public loading = false;
  public coreConfig: any;
  public passwordTextType: boolean;
  public registerForm: FormGroup;
  public submitted = false;
  public permitir_envio = false;
  public existencia = false;

  // Private
  private _unsubscribeAll: Subject<any>;
  private PREFERENCIAS= new PersonalizadoService;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _coreConfigService: CoreConfigService, 
    private _formBuilder: FormBuilder,
    private readonly afs: AngularFirestore,
    private _CamposService : CamposService,
    ) {

    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
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
            'firstName',
            'lastName',
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
                  'firstName',
                  'lastName',
                  'avatar-s-pyt4.jpg',
                  'role',
                  this.PREFERENCIAS.IDE_PA,
                  'token',
                  'estatus'
                );
                //si todo está ok que me retorne el ingreso
                break
            }
          }else{
            //registrar los campos comunes
            //alert('si entra');
            
            
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
    //detectar si requiere registro personalizado
    if(this.PREFERENCIAS.REGISTRO_PERSONALIZADO){
      //detecta los campos personalizados de cada proyecto
      switch(this.PREFERENCIAS.IDE_PA){
        case 'PYT-4':
          this.registerForm = this._formBuilder.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
          });
          break
      }
    }else{
      //registrar los campos comunes
      this.registerForm = this._formBuilder.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
