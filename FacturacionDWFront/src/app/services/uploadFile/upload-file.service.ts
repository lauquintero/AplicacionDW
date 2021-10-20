import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {


  validType = [] = ['medicos','hospitales','usuarios']
  URL = environment.urlServices
  constructor(
    private _http : HttpClient
  ) { }


  loadFile(file : File , tipo : string , id : string){
    
    let formData = new FormData()
    formData.set("file", file)

    if(tipo == undefined || tipo == null || tipo == '' || (this.validType.findIndex(x=> x == tipo ) == -1  )) return null

    return this._http.put(`${this.URL}upload/${tipo}/${id}`, formData  ).pipe(map((result : any)=> result))
  }

}
