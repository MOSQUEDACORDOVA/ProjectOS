import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }
  /**
   *  Confirms if user is client
   */
  get isClient() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Client;
  }

  /**
   *  Confirms if user is client
   */
  get isPM() {
    return this.currentUser && this.currentUserSubject.value.role === Role.PM;
  }
  get isPYT_21_Admin() {
    return this.currentUser && this.currentUserSubject.value.role === Role.PYT_21_Admin;
  }
  get isPYT_21_Inversor() {
    return this.currentUser && this.currentUserSubject.value.role === Role.PYT_21_Inversor;
  }
  /**
   *  Confirms if user puede acceder a ese modulo 
   */
  get usEstatus() {
    if(this.currentUser && this.currentUserSubject.value.estatus === 'VERIFICADO'){
      return true;
    }else{
      return false;
    }
  }
  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUrl}/users/authenticate`, { email, password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'Has iniciado sesión con éxito como usuario ' +
                  user.role +
                  '. Ahora puedes empezar a explorar. ¡Disfruta! 🎉',
                '👋 Bienvenid@, ' + user.firstName + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);

            // notify
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    var dominio=window.location.hostname;
    if(dominio=="localhost" || dominio=="projectos-666.web.app"){
      sessionStorage.removeItem('SS_proyecto_actual');
    }
    // notify
    this.currentUserSubject.next(null);
  }
}
