import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPaswordComponent } from './components/reset-pasword/reset-pasword.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPaswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPaswordComponent
  ]
})
export class AuthModule { }
