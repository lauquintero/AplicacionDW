import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { usuarioModelo } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {


  formgroup : FormGroup
  user : usuarioModelo
  fileupload : File
  imagetemp

  @ViewChild('fileElement') fileElement : ElementRef
  @ViewChild('imgfile') imgfile : ElementRef

  constructor(
    private fb : FormBuilder,
    private _userServices : UsuarioService
  ) { 
    this.initControl()
  }

  ngOnInit(): void {
    this.loadData()
    this.loadUser()
  }

  loadData(){
    this._userServices.getUser()
    this.user = this._userServices.user
  }

  // returnUser() : Observable<usuarioModelo> { 
  //   return new Observable( observer => {
  //     this.user = this._userServices.getUser()
  //     observer.complete()
  //   });
  // }

  initControl(){
    this.formgroup = this.fb.group({
      name : [{ value : "" , disabled : false},Validators.required],
      email : [{ value : "" , disabled : true},[Validators.required , Validators.email ]],
      role : [{value : "" , disabled: true} , Validators.required ]
    })
  }

  loadUser(){
    this.formgroup.controls["name"].setValue(this.user.name)
    this.formgroup.controls["email"].setValue(this.user.email)
    this.formgroup.controls["role"].setValue(this.user.role)

    if(this.user.img.indexOf("https")>-1){
      this.formgroup.controls["name"].disable()
      this.formgroup.controls["email"].disable()
    }else {
      this.formgroup.controls["name"].enable()
      this.formgroup.controls["email"].enable()
    }

  }

  save(){
    if(this.formgroup.valid){
      this.user.name = this.formgroup.controls["name"].value
      this.user.email = this.formgroup.controls["email"].value
      this.user.role = this.formgroup.controls["role"].value

      this._userServices.putUser(this.user).subscribe((result)=>{
        Swal.fire("Succes","usuario actualizado","success")
      },
      error=>{
        console.log(error)
      } )
    }
  }

  upload(){
    this._userServices.putFile(this.fileElement.nativeElement.files[0]);
  }

  changed(){
    if(this.fileElement.nativeElement.files && this.fileElement.nativeElement.files.length>0){
      this.fileupload = this.fileElement.nativeElement.files[0]
      if(this.fileupload.type.indexOf("image")<0){
        this.fileElement.nativeElement.value = ""
        Swal.fire("","No es una imagen","error")
      }else{
        let reader = new FileReader()
        //let urlImage = 
        reader.readAsDataURL(this.fileupload)

        reader.onloadend = ()=>{
          this.imagetemp = reader.result
        }
      }
    }
    else {
      this.fileupload = null
    }
  }

}
