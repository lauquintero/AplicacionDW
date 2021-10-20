import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = environment.urlServices

  constructor(
    private _http : HttpClient
  ) { }

  get( value : string){
    return  this._http.get(`${this.url}busqueda/todo/${value}`).pipe(map(result=> result))
  }
}
