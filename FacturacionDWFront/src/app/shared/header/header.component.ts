import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { usuarioModelo } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  user : usuarioModelo
  
  @ViewChild("inputsearch") inputsearch : ElementRef

  constructor(
    private _userService :UsuarioService,
    private _router :Router
  ) { }



  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this._userService.getUser()
    this.user = this._userService.user
  }

  getEmail(event: Event) {
    event.preventDefault();
    //console.log(this.emailCtrl.value);
  }

  logout(){
    this._userService.logout()
  }

  searh(){
    this._router.navigate(["/buscador",this.inputsearch.nativeElement.value])
  }
}
