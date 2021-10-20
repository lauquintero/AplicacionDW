import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { doctorModel } from '../../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url = environment.urlServices
  constructor(
    private _http : HttpClient
  ) { }


  get(){
    return this._http.get(`${this.url}medico`).pipe(map(result => result))
  }

  getId(id){
    return this._http.get(`${this.url}medico/${id}`).pipe(map(result => result))
  }

  post(name: string , idHospital : string){
    return this._http.post(`${this.url}medico`,{name : name , hospital : idHospital}).pipe(map(result => result))
  }

  put(data: doctorModel){
    return this._http.put(`${this.url}medico/${data._id}`,{name : data.name , hospital : data.hospital._id}).pipe(map(result => result))
  }

  delete(id : string){
    return this._http.delete(`${this.url}medico/${id}`).pipe(map(result => result))
  }

  getShearch(value){
    return this._http.get(this.url +'busqueda/collection/medicos/'+ value).pipe(map(result=> result))
  }

}
