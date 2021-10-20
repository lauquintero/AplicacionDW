import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component'
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { GuardGuard } from './services/guard/guard.guard';


const routes: Routes = [
  {path :'login', component :LoginComponent },
  {path :'register', component :RegisterComponent },
  {path : '', component :PagesComponent, canActivate: [GuardGuard], loadChildren :() => import('./pages/pages.module').then(m => m.PagesModule)  },
  {path :'**' , component : NopagefoundComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: true, relativeLinkResolution: 'legacy' } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
