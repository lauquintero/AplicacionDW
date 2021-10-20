import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';
import { usuarioModelo } from '../models/usuario.model';
import { Router } from '@angular/router';


declare function  init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls : [ './login.component.css']
})
export class RegisterComponent implements OnInit {

  

  formcontrolgroup : FormGroup

  constructor( 
    private fb : FormBuilder,
    private userService : UsuarioService,
    private route : Router
    ) {
    this.initControl()
   }

   initControl(){
     this.formcontrolgroup = this.fb.group({
       name : ["111" , Validators.required ],
       email : ["tt@mail.com" , [Validators.required , Validators.email ]],
       password : ["" , Validators.required],
       password2 :["" , Validators.required],
       condiciones : [false , Validators.requiredTrue]
     },
     {
      validator : this.comparevalue('password','password2')
    })  
   }

  ngOnInit(): void {
    init_plugins()
  }

  summit(event){
    if(this.formcontrolgroup.invalid){
      Swal.fire(
        'The Internet?',
        'Se presentaron errores.',
        'warning'
      )
      return 
    }

    let usuario  = new usuarioModelo()
    let control = this.formcontrolgroup.controls
    usuario.name = control["name"].value
    usuario.email = control["email"].value
    usuario.password = control["password"].value
    usuario.role = "USER"

    this.userService.postUser(usuario).subscribe(result => {
      // Swal.fire(
      //   'ok',
      //   'usuario registrado',
      //   'info'
      // )
      this.route.navigate(["/login"])
    },error =>{
      Swal.fire("Valid",error.error.error._message,"error")
    }
    )

  }

  comparevalue(value1,value2){
    
    return (group :FormGroup)  =>{

      if(!this.formcontrolgroup) return null
      let pass1 = this.formcontrolgroup.controls[value1]
      let pass2 = this.formcontrolgroup.controls[value2]

      if(pass1.value === pass2.value){
        return null 
      }
      return { sonIguales :true }
    }
  }
}
