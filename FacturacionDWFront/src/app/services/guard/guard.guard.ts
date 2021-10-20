import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  // constructor( public userServoce : UsuarioService ){
    
  // }

  canActivate(): boolean
    {
      if(localStorage.getItem("token")){
        return true;
      }
      return false
  }
  
}
