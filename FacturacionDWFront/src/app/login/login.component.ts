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
    //this.initGoogle()
    this.initClient()
    this.loadRemenber()
  }

  


  initClient(){
    gapi.load('auth2', ()=>{        
        this.auth2 = gapi.auth2.init({
            client_id: '613694650348-i992ea8v8oglsdem3nfci7ic6k0hp0j5.apps.googleusercontent.com',
            cookie_policy : 'single_host_origin',
            scope:'profile email'
        });

       // Attach the click handler to the sign-in button
       //var google = document.getElementById("googlebtn")
        var google  = this.bntGoogle.nativeElement 
        this.auth2.attachClickHandler(google, {}, (googleUser)=>{
          var profile = googleUser.getBasicProfile();
          // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          // console.log('Name: ' + profile.getName());
          // console.log('Image URL: ' + profile.getImageUrl());
          // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
          // console.log('token', googleUser.getAuthResponse().id_token);
          this.userservice.postLoginGoogleSignIn(googleUser.getAuthResponse().id_token).subscribe((result : any) =>{

            localStorage.setItem("id",JSON.stringify(result.data._id))
            localStorage.setItem("user",JSON.stringify(result.data))
            localStorage.setItem("token",JSON.stringify(result.token))
            localStorage.setItem("menu",JSON.stringify(result.menu))

            //this._router.navigate(["/dashboard"])
            window.location.href = '#/dashboard'
          },(error)=>{
            console.log(error)
          })
        }, (error)=>{
          console.log(error);
        });
    });
};


  // initGoogle(){
  //   gapi.load('auth2',()=>{

  //     this.auth2 = gapi.auth2.init({
  //       client_id: '613694650348-i992ea8v8oglsdem3nfci7ic6k0hp0j5.apps.googleusercontent.com',
  //       cookiepolicy: 'single_host_origin',
  //       scope: 'profile email'
  //     });

  //     this.attachSignIn()

  //   })
    
  // }

  // attachSignIn ( ){
  //   this.auth2.attachClickHandler(this.bntGoogle , {},  (googleUser)=>{
  //     let profile = googleUser.getBasicProfile()
  //     console.log(profile)
  //   })
  // }

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
        debugger
        this.userservice.postLoginNet().subscribe((result : any)=> {
        localStorage.setItem("id",JSON.stringify(12))
        // localStorage.setItem("user",JSON.stringify(result.data))
        localStorage.setItem("token",JSON.stringify(result.token))
        // localStorage.setItem("menu",JSON.stringify(result.menu))

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
