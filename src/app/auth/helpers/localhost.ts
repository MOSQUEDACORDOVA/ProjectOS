/**
 *  ? Tip:
 *
 * For Actual Node.js - Role Based Authorization Tutorial with Example API
 * Refer: https://jasonwatmore.com/post/2018/11/28/nodejs-role-based-authorization-tutorial-with-example-api
 * Running an Angular 9 client app with the Node.js Role Based Auth API
 */

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User, Role } from 'app/auth/models';
import { PersonalizadoService } from 'app/personalizado/personalizado.service';
import firebase from "firebase/app";
import "firebase/firestore";
import { environment } from 'environments/environment';
var mi_firebase=firebase.initializeApp(environment.firebase);
var db = mi_firebase.firestore();
class Mis_Usuarios {
  constructor (public id, public email, public firstName, public lastName, public avatar, public role, public token, public proyecto ) {
          this.id = id;
          this.email = email;
          this.firstName = firstName;
          this.lastName = lastName;
          this.avatar = avatar;
          this.role = role;
          this.token = `fake-jwt-token.${id}`;
          this.proyecto = proyecto;
      }
  toString() {
          return this.id + ', ' + this.email+ '';
      }
}
// Firestore data converter
var usuariosConverter = {
  toFirestore: function(usuario) {
      return {
          id: usuario.id,
          email: usuario.email,
          firstName: usuario.firstName,
          lastName: usuario.lastName,
          avatar: usuario.avatar,
          role: usuario.role,
          token: `fake-jwt-token.${usuario.id}`,
          proyecto: usuario.proyecto,
          };
  },
  fromFirestore: function(snapshot, options){
      const data = snapshot.data(options);
      return new Mis_Usuarios(data.id, data.email, data.firstName, data.lastName, data.avatar, data.role, data.token, data.proyecto );
  }
};

var IDE_PA= new PersonalizadoService;
// Users with role
const users: User[] = [
  {
    id: 1,
    email: 'admin@demo.com',
    password: 'admin',
    firstName: 'Isaac',
    lastName: 'M.',
    avatar: 'avatar-s-11.jpg',
    role: Role.Admin,
    proyecto:'PYT-21'
  },
  {
    id: 2,
    email: 'client@demo.com',
    password: 'client',
    firstName: 'Nataly',
    lastName: 'Doe',
    avatar: 'avatar-s-2.jpg',
    role: Role.Client,
    proyecto:'PYT-21'
  },
  {
    id: 3,
    email: 'user@demo.com',
    password: 'user',
    firstName: 'Rose',
    lastName: 'Doe',
    avatar: 'avatar-s-3.jpg',
    role: Role.User,
    proyecto:'PYT-21'
  },
  {
    id: 4,
    email: 'admin@demo.com',
    password: 'admin@demo.com',
    firstName: 'Isaac',
    lastName: 'Mosqueda',
    avatar: 'avatar-s-11.jpg',
    role: Role.PYT_21_Admin,
    proyecto:'PYT-21'
  },
  {
    id: 5,
    email: 'client@demo.com',
    password: 'client@demo.com',
    firstName: 'Isaac',
    lastName: 'Mosqueda',
    avatar: 'avatar-s-11.jpg',
    role: Role.PYT_21_Inversor,
    proyecto:'PYT-21'
  },
  {
    id: 6,
    email: 'admin@demo.com',
    password: 'admin@demo.com',
    firstName: 'Isaac',
    lastName: 'M.',
    avatar: 'avatar-s-11.jpg',
    role: Role.PYT_4_Director,
    proyecto:'PYT-4'
  },
  {
    id: 7,
    email: 'client@demo.com',
    password: 'client@demo.com',
    firstName: 'Isaac',
    lastName: 'Mosqueda',
    avatar: 'avatar-s-11.jpg',
    role: Role.PYT_4_Cliente,
    proyecto:'PYT-4'
  }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(handleRoute));
    // .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    // .pipe(delay(500))
    // .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions
    
    function authenticate() {
      /*/FIREBASE

      db.collection("usuarios").where("email", "==", 'client@demo.com')
      .withConverter(usuariosConverter)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // Convert to USUARIO object 
        var usuario = doc.data();
              console.log(usuario.toString());  
              
              sessionStorage.setItem('firstName', usuario.firstName);
        });
      })
      .catch((error) => {
          
          console.log("Algo falló");
      });

      //FIN FIREBASE*/
      
      const { email, password } = body;
      const fire_users: User[] = [
        {
          id: sessionStorage.getItem('aut_id'),
          password: sessionStorage.getItem('aut_password'),
          email: sessionStorage.getItem('aut_email'),
          firstName: sessionStorage.getItem('aut_firstName'),
          lastName: sessionStorage.getItem('aut_lastName'),
          avatar: sessionStorage.getItem('aut_avatar'),
          role: sessionStorage.getItem('aut_role'),
          token: `fake-jwt-token.${sessionStorage.getItem('aut_id')}`,
          proyecto: sessionStorage.getItem('aut_proyecto'),
        },
      ];
      const user = fire_users.find(x => x.email === email && x.password === password && x.proyecto === IDE_PA.IDE_PA);
      //const user = fire_users.find(x => 'client@demo.com' === email && 'client@demo.com' === password && 'PYT-4' === IDE_PA.IDE_PA);
      
      if (!user) return error('Los datos son incorrectos');
      return ok({
        id: sessionStorage.getItem('aut_id'),
        email: sessionStorage.getItem('aut_email'),
        firstName: sessionStorage.getItem('aut_firstName'),
        lastName: sessionStorage.getItem('aut_lastName'),
        avatar: sessionStorage.getItem('aut_avatar'),
        role: sessionStorage.getItem('aut_role'),
        token: `fake-jwt-token.${sessionStorage.getItem('aut_id')}`,
        proyecto: sessionStorage.getItem('aut_proyecto'),
      });
    }

    function getUsers() {
      if (!isAdmin()) return unauthorized();
      return ok(users);
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      // only admins can access other user records
      if (!isAdmin() && currentUser().id !== idFromUrl()) return unauthorized();

      const user = users.find(x => x.id === idFromUrl());
      return ok(user);
    }

    // helper functions

    function ok(body) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'unauthorized' } });
    }

    function error(message) {
      return throwError({ status: 400, error: { message } });
    }

    function isLoggedIn() {
      const authHeader = headers.get('Authorization') || '';
      return authHeader.startsWith('Bearer fake-jwt-token');
    }

    function isAdmin() {
      return isLoggedIn() && currentUser().role === Role.Admin;
    }

    function currentUser() {
      if (!isLoggedIn()) return;
      const id = parseInt(headers.get('Authorization').split('.')[1]);
      return users.find(x => x.id === id);
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
