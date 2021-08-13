import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil, first } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AuthenticationService } from 'app/auth/service';
import { CoreConfigService } from '@core/services/config.service';
import { PersonalizadoService } from 'app/personalizado/personalizado.service';

import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Item { name: string; }
@Component({
  selector: 'app-auth-login-v2',
  templateUrl: './auth-login-v2.component.html',
  styleUrls: ['./auth-login-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthLoginV2Component implements OnInit {
  //FIREBASE FIRESTORE
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  //  Public
  public coreConfig: any;
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public passwordTextType: boolean;
  public nombre: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    public PersonalizadoService: PersonalizadoService,
    private _coreConfigService: CoreConfigService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private afs: AngularFirestore
  ) {
    //FIREBASE FIRESTORE
    
    
    this.itemDoc = afs.doc<Item>('usuarios/EvVsDZNGGW0nI0koTw1P');
    this.item = this.itemDoc.valueChanges();
    this.itemsCollection = this.afs.collection('usuarios', ref => ref.where('nombre', '==', 'hector'));
    this.items = this.itemsCollection.valueChanges();
    
    // redirect to home if already logged in
    if (this._authenticationService.currentUserValue) {
      this._router.navigate(['/']);
    }

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
  async prueba(param){
    var x = this.items;

    return new Promise(resolve =>{
      param.pipe().subscribe((data):any =>{
        console.log(data)
          resolve(data);
      })
    })
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  update(item: Item) {
    this.itemDoc.update(item);
  }
  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    this.itemsCollection = this.afs.collection('usuarios', ref => ref.where('email', '==', this.f.email.value).where('password', '==', this.f.password.value));
    this.items = this.itemsCollection.valueChanges();
    
    this.prueba(this.items).then((res)=>{ 
      //detectar si viene vacío
      var valido=res.toString();
      if(valido.length>1){
        var id= res[0]['id'];
        var email= res[0]['email'];
        var firstName= res[0]['firstName'];
        var lastName= res[0]['lastName'];
        var avatar= res[0]['avatar'];
        var role= res[0]['role'];
        var proyecto= res[0]['proyecto'];
        var password= res[0]['password'];
        sessionStorage.setItem('aut_id', id);
        sessionStorage.setItem('aut_email', email);
        sessionStorage.setItem('aut_firstName', firstName);
        sessionStorage.setItem('aut_lastName', lastName);
        sessionStorage.setItem('aut_avatar', avatar);
        sessionStorage.setItem('aut_role', role);
        sessionStorage.setItem('aut_proyecto', proyecto);
        sessionStorage.setItem('aut_password', password);
        //flujo con datos
        // stop here if form is invalid
        if (this.loginForm.invalid) {
          return;
        }
        // Login
        this.loading = true;
        this._authenticationService
          .login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            data => {
              this._router.navigate([this.returnUrl]);
            },
            error => {
              this.error = error;
              this.loading = false;
            }
          );
      }else{
        //flujo normal
        // stop here if form is invalid
        if (this.loginForm.invalid) {
          return;
        }
        // Login
        this.loading = true;
        this._authenticationService
          .login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            data => {
              this._router.navigate([this.returnUrl]);
            },
            error => {
              this.error = error;
              this.loading = false;
            }
          );
      }
      
      
    })
    
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['client@demo.com', [Validators.required, Validators.email]],
      password: ['client@demo.com', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
    /*this.prueba().then((res)=>{

      var nombre= res[0]['nombre'];
      alert(nombre);

     })*/

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
