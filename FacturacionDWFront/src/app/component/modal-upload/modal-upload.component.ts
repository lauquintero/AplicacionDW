import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { usuarioModelo } from 'src/app/models/usuario.model';
import {  ModelUploadService, UploadFileService } from 'src/app/services/service.index';


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: [
  ]
})
export class ModalUploadComponent implements OnInit {


  @Input() Titulo : string
  @Input() body : string

  @Output() closeEvent = new EventEmitter<boolean>()
  @ViewChild('fileElement') fileElement : ElementRef

  imagetemp
  

  constructor(
    public _modalServices : ModelUploadService,
    private _uploadFile : UploadFileService
  ) {
   }

  ngOnInit(): void {
    //this._modalServices.user = new usuarioModelo()
  }

  close(){
    this._modalServices.hideModal()
  }

  save(){
    this._uploadFile.loadFile(this._modalServices.fileupload,this._modalServices.tipo,this._modalServices.id).subscribe(result => {
      this._modalServices.getNotiEventEmitter().emit(result)
      this.close();
    }) ;
  }

  changed(){
    if(this.fileElement.nativeElement.files && this.fileElement.nativeElement.files.length>0){
      this._modalServices.fileupload = this.fileElement.nativeElement.files[0]
      if(this._modalServices.fileupload.type.indexOf("image")<0){
        this.fileElement.nativeElement.value = ""
        //Swal.fire("","No es una imagen","error")
      }else{
        let reader = new FileReader()
        reader.readAsDataURL(this._modalServices.fileupload)
        reader.onloadend = ()=>{
          this.imagetemp = reader.result
        }
      }
    }
    else {
      this._modalServices.fileupload = null
    }
  }



}
