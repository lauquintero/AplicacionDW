import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';


declare function  init_plugins();

declare const gapi


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls :['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email : "" ,
    password : "",
    remember : false,
  }

  @ViewChild("btnGoogle") bntGoogle :ElementRef

  auth2 
  //googleUser : any

  
  constructor(
    private _router : Router,
    private userservice : UsuarioService
    ) { 

      
    }

  ngOnInit(): void {
    init_plugins()
    this.loadRemenber()
  }


  loadRemenber(){
    let email = localStorage.getItem("email")
    if(email){
      this.usuario.email = email
      this.usuario.remember = true
    }
  }

  ingresar(event : Event,form : NgForm){

    event.preventDefault()
    
    if( this.usuario.email && this.usuario.password){
        this.userservice.postLoginNet().subscribe((result : any)=> {
        localStorage.setItem("id",JSON.stringify(12))
        localStorage.setItem("token",JSON.stringify(result.token))
        this._router.navigate(["/dashboard"])
      },
      error =>{
        Swal.fire("campos", "credenciales invalidas","error")  
      })
      
    }
    else {
      Swal.fire("campos", "campos requeiros","error")
    } 
  }
}
