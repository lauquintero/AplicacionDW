import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../../services/service.index'
import { UsuarioService } from '../../services/usuario/usuario.service';
import { usuarioModelo } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menus : any []

  user : usuarioModelo

  constructor(
    private _SidebarService : SidebarService,
    private _userService : UsuarioService
  ) { }


  ngOnInit(): void {
    this.menus = this._SidebarService.getMEnu();
    this.getUser()
  }

  getUser(){    
    this._userService.getUser()
    this.user = this._userService.user
  }
  
  logout(){
    this._userService.logout()
  }


}
