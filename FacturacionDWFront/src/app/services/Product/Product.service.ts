import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from'@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

URLSERVICES = environment.urlbackend

constructor(
  private http : HttpClient,
) { }

  getProduct()
  {
    return this.http.get(this.URLSERVICES + 'api/Producto/ListadoProductos')
  }

  GetProductStock()
  {
    return this.http.get(this.URLSERVICES + 'api/Producto/ListadoProductosStock')
  }

  GetProductAno()
  {
    return this.http.get(this.URLSERVICES + 'api/Producto/ListadoProductosAno')
  }
  

}
