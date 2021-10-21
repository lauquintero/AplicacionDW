import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from'@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

URLSERVICES = environment.urlbackend

constructor(
  private http : HttpClient,
) { }

  getClientEdad()
  {
    return this.http.get(this.URLSERVICES + 'api/Cliente/ListadoClientesEdad')
  }

  GetClienteCompraEstimada(identificacion : string)
  {
    return this.http.post(this.URLSERVICES + 'api/Cliente/ProximaCompraEstimada',{identificacion : identificacion })
  }

 
  

}
