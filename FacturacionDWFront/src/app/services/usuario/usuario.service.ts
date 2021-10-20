import { Injectable } from '@angular/core';
import { usuarioModelo } from '../../models/usuario.model';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from'@angular/common/http'
import { map } from 'rxjs/internal/operators/map';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UploadFileService } from '../uploadFile/upload-file.service';
import { env } from 'process';


 
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  URL =  environment.urlServices 
  URLSERVICES = environment.urlbackend
  token : string = ""

  user : usuarioModelo

  constructor(
    private http : HttpClient,
    private _router : Router,
    private _uploadFileService : UploadFileService
  ) { 
    
  }

  postUser(user : usuarioModelo ){
    return this.http.post(this.URL+'usuario',user).pipe(map((result : any )=> {
      Swal.fire("usuario creardo", user.email,"success")
      return result
    }))
  }

  postLogin(email : string , password : string){
    return this.http.post(this.URL + "login",{ email,password }).pipe(map((result)=>{
      Swal.fire("Bienvenido", "","success")
      this.timernewtoken()
      return result
    }))
  }

  postLoginNet()
  {
    return this.http.get(this.URLSERVICES + 'api/Autenthenticatio')
  }

  postLoginGoogleSignIn(token){
    return this.http.post(this.URL + 'login/googlesingin' , { token }).pipe(map((result)=>{
      Swal.fire("Bienvenido", "","success")
      this.timernewtoken()
      return result
    }))
  }

  interval 
  timernewtoken(){
    this.interval = setInterval(()=>{
      this.newToken().subscribe((result : any) =>{
        console.log(result.token)
        localStorage.setItem("token",JSON.stringify(result.token))
      },error=>{
        console.log(error)
      })
    },
      3600000
    )
  }

  newToken(){
    return this.http.get(`${this.URL}login/newToken`)
  }


  logout(){
    if(localStorage.getItem("id")){
      localStorage.removeItem("id")
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      localStorage.removeItem("menu")
    }
    clearInterval(this.interval)
    this._router.navigate(['/login'])
  }

  getUser(){
    let userjson = JSON.parse(localStorage.getItem("user"));
    this.user = new usuarioModelo()
    this.user._id = userjson._id
    this.user.img = userjson.img
    this.user.name = userjson.name
    this.user.email = userjson.email
    this.user.role = userjson.role
    
  }



  putUser(user : usuarioModelo)  : Observable<any> {
    
    return this.http.put(this.URL + "usuario/" + user._id, user  ).pipe(map((result : any)=>{
      let userlocal  = localStorage.getItem("user")
      if(userlocal){
        let userobjec : any = JSON.parse(userlocal)
        userobjec.name = result.data.name
        userobjec.email = result.data.email
        localStorage.setItem("user", JSON.stringify(userobjec))
      }
      return result
    }))
  }

  putUserRole(user : usuarioModelo)  : Observable<any> {
    
    return this.http.put(this.URL + "usuario/" + user._id, user  ).pipe(map((result : any)=>{
      return result
    }))
  }

  putFile(file : File){
    //let param = { params:this.getParam() } 
    this.getUser()
    // let formData = new FormData()
    // formData.set("file", file)
    return this._uploadFileService.loadFile(file,'usuarios',this.user._id).subscribe(result => {
      if(result){
        let user  = localStorage.getItem("user")
        if(user){
          let userobjec : any = JSON.parse(user)
          userobjec.img = result.img
          localStorage.setItem("user", JSON.stringify(userobjec))
          this.getUser()
          Swal.fire("upload file", "","success")
        }
      }
      return result
    })

    // return this.http.put(this.URL + 'upload/usuarios/'+ this.user._id, formData , param ).pipe(map((result : any)=>{
    //   if(result){
    //     let user  = localStorage.getItem("user")
    //     if(user){
    //       let userobjec : any = JSON.parse(user)
    //       userobjec.img = result.img
    //       localStorage.setItem("user", JSON.stringify(userobjec))
    //       this.getUser()
    //       Swal.fire("upload file", "","success")
    //     }
    //   }
    //   return result
    // }))
  }

  getUsuarios(desde,cantidad){
    let params = new HttpParams().set("desde",desde).set("cantidad",cantidad)
    return this.http.get(this.URL + 'usuario', {params} ).pipe(map((result : any)=>{
        return result
    }))
  }

  getUserId(user){
    return this.http.get(this.URL +'usuario/'+ user).pipe(map(result=> result))
  }

  deleteUser(id : string){
    
    return this.http.delete(this.URL+'usuario/'+id).pipe(map(result=>result))
  }



}
