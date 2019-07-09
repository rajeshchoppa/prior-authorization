import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriorAuthFormComponent } from './prior-auth-form/prior-auth-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'prior', component: PriorAuthFormComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

//export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
