import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { doctorModel } from '../../models/doctor.model';
import { DoctorService } from '../../services/doctor/doctor.service';
import { HospitalService } from '../../services/hospital/hospital.service';
import { hospitalModel } from '../../models/hospital.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: [
  ]
})
export class DoctorComponent implements OnInit {


  data : doctorModel = new doctorModel()
  hospitals : Array<hospitalModel> 
  hospitalSelect
  _id 

  constructor(
    private _routeActive : ActivatedRoute,
    private _docService : DoctorService,
    private _hospital : HospitalService,
    private _route : Router
     ) {

      this._routeActive.paramMap.subscribe( paramMap => {
        this._id = paramMap.get('id');
      })
   }

  ngOnInit(): void {
    this.getId()
    this.getHospital()
  }

  getId(){
    if(this._id && this._id != "new" ){
      this._docService.getId(this._id).subscribe((result : any) => {
        this.data = result.medico
        console.log(this.data)
      })
    }
  }
  
  getHospital(){
    this._hospital.getHospitals().subscribe((result : any)=>{
      this.hospitals = result.hospitales
    })
  }

  save(){
    if(this.data.hospital.name){
      let idhospital = this.hospitals.find(x => x.name == this.data.hospital.name)._id
      if(this._id == "new"){
        this._docService.post(this.data.name,idhospital).subscribe(result=>{
          console.log(result)
          console.log("insert doctor")
          this.routeHospitals()
        })
      }else{
        this.data.hospital._id = idhospital
        this._docService.put(this.data).subscribe(result =>{
          console.log(result)
          console.log('update doctor')
          this.routeHospitals()
        })
      }
    }
  }

  routeHospitals(){
    this._route.navigateByUrl("/medicos")
  }

}
