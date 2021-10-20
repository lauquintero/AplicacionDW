import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  url = environment.urlServices
  constructor(private _http : HttpClient) { }

  getHospitals(){
    return this._http.get(`${this.url}hospital`).pipe(map(result=> result))
  }

  getHospital(id){
    return this._http.get(`${this.url}hospital/${id}`).pipe(map(result=> result))
  }

  getShearchHospital(value){
    return this._http.get(this.url +'busqueda/collection/hospitales/'+ value).pipe(map(result=> result))
  }

  deleteHospital(id){
    return this._http.delete(`${this.url}hospital/${id}`).pipe(map(result=> result))
  }

  putHospital(hospital){
    return this._http.put(`${this.url}hospital/${hospital._id}`,hospital)
  }

  postHospital(name : string){
    return this._http.post(`${this.url}hospital`,{ name : name })
  }

}
