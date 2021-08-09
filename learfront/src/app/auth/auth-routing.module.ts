import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPaswordComponent } from './components/reset-pasword/reset-pasword.component';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'reset-password', component: ResetPaswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
