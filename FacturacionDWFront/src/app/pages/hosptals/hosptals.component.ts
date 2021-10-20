import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HospitalService } from '../../services/hospital/hospital.service';
import { ModelUploadService } from '../../component/modal-upload/model-upload.service';
import Swal from 'sweetalert2'
import { hospitalModel } from '../../models/hospital.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-hosptals',
  templateUrl: './hosptals.component.html',
  styles: [
  ]
})
export class HosptalsComponent implements OnInit {


  @ViewChild("inputShearch") inputShearch : ElementRef
  spiner : boolean = false
  data : Array<hospitalModel>

  constructor(
    private _hospitalService : HospitalService,
    private _modalUploadService : ModelUploadService
  ) { }

  ngOnInit(): void {
    this.getHospitals()
    this.modalSubscribe()
  }

  modalSubscribe(){
    this._modalUploadService.getNotiEventEmitter().subscribe(result => {
      if(result.ok){
        Swal.fire("Update","","success")
      }
      this.getHospitals()
    })
  }

  getHospitals(){
    this.spiner = true
    this._hospitalService.getHospitals().subscribe((result : any) => {
      var interval =setInterval(()=>{
        this.data = result.hospitales
        this.spiner = false
        clearTimeout(interval)
      },2000)

    },()=> this.spiner = false)
  }

  getHospital(id){
    this._hospitalService.getHospital(id).subscribe(result => {
    })
  }

  searcHospital(shearch){
    //let shearch = this.inputShearch.nativeElement.value
    if(shearch){
      this.getShearch(shearch)
    }
    else {
      this.getHospitals()
    }
  }

  getShearch(value){
    this._hospitalService.getShearchHospital(value).subscribe((result : any)=>{
      this.data = result.hospitales
    })
  }

  updateImage(value){
    this._modalUploadService.showModal("hospitales",value._id)
    this._modalUploadService.img = value.img
  }

  deleteHospital(id){
    this._hospitalService.deleteHospital(id).subscribe((result) => {
      Swal.fire("hospital delete","","success")
      this.getHospitals()
    },(error)=>console.log(error))
  }

  updateHospital(value){
    this._hospitalService.putHospital(value).subscribe(result => {
      Swal.fire("hospital update","","success")
    },error=>{
    })
  }

  addHospital(){
    Swal.fire({
      title : "Add new hospital",
      input : "text",
      showConfirmButton : true,
      confirmButtonText : "Save",
      showCancelButton : true,
      showLoaderOnConfirm : true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm : (inputValue)=>{
        if(inputValue){
          return inputValue
        }
        else{
          Swal.showValidationMessage(
            `Value required`
          )
        }
      }
    }).then((result) =>{
      if(result.isConfirmed){
        this._hospitalService.postHospital(result.value).subscribe(data=>{
          Swal.fire(`add hospital ${result.value}`,"","success")
          this.getHospitals()
      },()=> {

      })
      }
    })
  }

  next(){

  }

  previous(){

  }

}
