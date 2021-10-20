import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DoctorService } from 'src/app/services/service.index';
import { doctorModel } from '../../models/doctor.model';
import { ModelUploadService } from '../../component/modal-upload/model-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: [
  ]
})
export class DoctorsComponent implements OnInit {

  data : Array<doctorModel>
  spiner : boolean = false
  @ViewChild("inputShearch") inputShearch : ElementRef
  constructor(
    private _doctorServices : DoctorService,
    private _modalUploadService : ModelUploadService
  ) { }

  ngOnInit(): void {
   this.get()
   this._modalUploadService.getNotiEventEmitter().subscribe((result)=>{
     if(result){
       this.get()
     }
   })
  }

  get(){
    this.spiner = true;
    this._doctorServices.get().subscribe((result : any)=> {
      this.data = result.medicos
      this.spiner = false
    },error => this.spiner = false)
  }

  search(event){
    if(event){
      this._doctorServices.getShearch(event).subscribe((result : any)=>{
        console.log(result)
        this.data = result.medicos
      })
    }else {
      this.get()
    }
    
  }

  updateImage(value){
    this._modalUploadService.showModal("medicos",value._id)
    this._modalUploadService.img = value.img
  }

  deleteM(id){
    this._doctorServices.delete(id).subscribe((result)=> {
      Swal.fire("hospital delete","","success")
      this.get()
    })
  }

}
