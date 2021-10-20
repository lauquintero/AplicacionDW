import { Injectable, EventEmitter } from '@angular/core';
import { usuarioModelo } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ModelUploadService {
  tipo :string
  id : string
  oculto : string = 'oculto'
  private notificacion : EventEmitter<any> = new EventEmitter()
  fileupload : File
  //user : usuarioModelo
  img : string

  constructor(
  ) {
   }


  hideModal(){
    this.oculto = 'oculto'
    this.tipo = null
    this.id = null
    this.img = null
    this.fileupload = null
  }

  showModal(tipo: string, id : string){
    this.oculto = ''
    this.tipo = tipo
    this.id = id
  }

  getNotiEventEmitter(){
    return this.notificacion;
  }

}

