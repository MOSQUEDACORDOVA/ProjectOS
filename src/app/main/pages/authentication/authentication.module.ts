import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { AuthForgotPasswordV1Component } from 'app/main/pages/authentication/auth-forgot-password-v1/auth-forgot-password-v1.component';
import { AuthForgotPasswordV2Component } from 'app/main/pages/authentication/auth-forgot-password-v2/auth-forgot-password-v2.component';

import { AuthLoginV1Component } from 'app/main/pages/authentication/auth-login-v1/auth-login-v1.component';
import { AuthLoginV2Component } from 'app/main/pages/authentication/auth-login-v2/auth-login-v2.component';

import { AuthRegisterV1Component } from 'app/main/pages/authentication/auth-register-v1/auth-register-v1.component';
import { AuthRegisterV2Component } from 'app/main/pages/authentication/auth-register-v2/auth-register-v2.component';

import { AuthResetPasswordV1Component } from 'app/main/pages/authentication/auth-reset-password-v1/auth-reset-password-v1.component';
import { AuthResetPasswordV2Component } from 'app/main/pages/authentication/auth-reset-password-v2/auth-reset-password-v2.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'environments/environment';

//CAMPOS DE CADA PROYECTO
import { Default_Campos } from 'app/main/pages/authentication/auth-register-v2/default_campos/default_campos.component';
import { Pyt_4_Campos } from 'app/main/pages/authentication/auth-register-v2/pyt_4_campos/pyt_4_campos.component';

//CAMPOS ESPECIALES
import { NgxMaskModule } from 'ngx-mask';

// routing
const routes: Routes = [
  {
    path: 'authentication-OCULTO/login-v1',
    component: AuthLoginV1Component
  },
  {
    path: 'authentication/login-v2',
    component: AuthLoginV2Component
  },
  {
    path: 'authentication-OCULTO/register-v1',
    component: AuthRegisterV1Component
  },
  {
    path: 'authentication/register-v2',
    component: AuthRegisterV2Component
  },
  {
    path: 'authentication/reset-password-v1',
    component: AuthResetPasswordV1Component
  },
  {
    path: 'authentication/reset-password-v2',
    component: AuthResetPasswordV2Component
  },
  {
    path: 'authentication/forgot-password-v1',
    component: AuthForgotPasswordV1Component
  },
  {
    path: 'authentication/forgot-password-v2',
    component: AuthForgotPasswordV2Component
  }
];

@NgModule({
  declarations: [
    AuthLoginV1Component,
    AuthRegisterV1Component,
    AuthLoginV2Component,
    AuthRegisterV2Component,
    AuthForgotPasswordV1Component,
    AuthForgotPasswordV2Component,
    AuthResetPasswordV1Component,
    AuthResetPasswordV2Component,
    Default_Campos,
    Pyt_4_Campos
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    NgbModule, 
    FormsModule, 
    ReactiveFormsModule, 
    CoreCommonModule, 
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    NgxMaskModule.forRoot()
  ]
})
export class AuthenticationModule {}
