import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { usuarioModelo } from '../../models/usuario.model';
import { environment } from '../../../environments/environment.prod';
import Swal from 'sweetalert2';
import { ModelUploadService } from '../../component/modal-upload/model-upload.service';

@Component({
  selector: 'app-usuaarios',
  templateUrl: './usuaarios.component.html',
  styles: [
  ]
})
export class UsuaariosComponent implements OnInit {

  data : usuarioModelo[]
  total : number
  pagina : number = 1
  paginas : number = 0
  cantidadPagina : number = environment.cantidadPagina
  usuario : usuarioModelo

  spiner : boolean = false

  @ViewChild('inputBuscar') inputBuscar : ElementRef

  constructor(
    private _usuarioSerivice :UsuarioService,
    private _modalUploadService : ModelUploadService
  ) {
    this._usuarioSerivice.getUser()
    this.usuario = this._usuarioSerivice.user
   }

  ngOnInit(): void {
    this.getUser()
    this.subscribeUpload()
  }

  subscribeUpload(){
    this._modalUploadService.getNotiEventEmitter().subscribe(result=> {
      this.getUser()
      if(this.usuario._id == result._id){
        console.log(result)
        let user  = localStorage.getItem("user")
        if(user){
          let userobjec : any = JSON.parse(user)
          userobjec.img = result.img
          localStorage.setItem("user", JSON.stringify(userobjec))
          this.getUser()
          Swal.fire("upload file", "","success")
        }
      }
    })
  }

  getUser(){
    console.log("load user")
    let desde = (this.pagina * this.cantidadPagina)-(this.cantidadPagina)

    this.spiner = true
    this._usuarioSerivice.getUsuarios(desde,this.cantidadPagina).subscribe((result : any) =>{
      let interval = setInterval( () =>{
        //console.log(result)
        this.data = result.usuarios
        this.total = result.total

        if(this.total>0){
         this.total = result.total
         //this.pagina = 1
         this.paginas = this.total<this.cantidadPagina? 1: this.total/this.cantidadPagina
        }
        this.spiner = false   
        clearInterval(interval)
      },2000 )
     

    },
    error=>{
      console.log(error)
      this.spiner = false
    })
  }

  getUserID(user : string){
    this._usuarioSerivice.getUserId(user).subscribe((result : any)=>{
      this.data = result.usuarios
      console.log(this.data)
      this.total = this.data.length
      if(this.total>0){
        //this.total = result.total
        this.pagina = 1
        this.paginas = this.total<this.cantidadPagina? 1: this.total/this.cantidadPagina
       }
    })
  }

  siguiente(){
    let conteo = this.pagina + 1
    if(conteo > this.total){
      this.pagina = this.total
    }else{
      this.pagina = conteo
    }
    this.getUser()
  }

  anterior(){
    let conteo = this.pagina -1
    if(conteo < 1){
      this.pagina = 1
    }else{
      this.pagina = conteo
    }
    this.getUser()
  }

  buscarUsuario(busqueda){
    if(busqueda){
      this.getUserID(busqueda)
    }else{
      this.getUser();
    }
  }

  eliminarUsuario(id:string){
    this._usuarioSerivice.getUser()
    if(this._usuarioSerivice.user._id !== id){
      Swal.fire({ title : "Va a eliminar el usuario, ¿Desea continual?" , icon:"question" , showCancelButton : true }).then(result =>{
        if(result.isConfirmed){
          this._usuarioSerivice.deleteUser(id).subscribe(result=>{
            console.log(result)
            Swal.fire("Usuario eliminado","","success")
            this.getUser()
          },
          error=>{
            console.log(error)
          })
        }
      })
    }else{
      Swal.fire("El usuario se encuentra logeado","","warning")
    }
    
  }

  actualizarUsuario(value : usuarioModelo){
    this._usuarioSerivice.putUserRole(value).subscribe(result=>{
      console.log(result)
    },err=> console.log(err) )
    console.log(value)
  }

  actualizarImagen(row : usuarioModelo){
    this._modalUploadService.showModal("usuarios",row._id)
    this._modalUploadService.img = row.img
  }

}
