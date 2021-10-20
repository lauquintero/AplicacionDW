

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { SearchService } from 'src/app/services/service.index';
import { ModelUploadService } from '../../component/modal-upload/model-upload.service';


@Component({
  selector: 'app-searchpages',
  templateUrl: './search-pages.component.html',
  styles: [
  ]
})
export class SearchPagesComponent implements OnInit {


  data : dataseach[] = []
  constructor(
    private _routeActive : ActivatedRoute,
    private _searchServce : SearchService,
    private _modalUploadService : ModelUploadService,
    private _route : Router
  ) {
    this._routeActive.paramMap.subscribe(paramsMap => {
      let search = paramsMap.get("search")
      if(search){
        this.get(search)
      }
    })
   }

  ngOnInit(): void {

  }

  get(value:string){
    this._searchServce.get(value).subscribe((result : any) => {
      console.log(result)
      
      
      if(result){
        if(result.hospitales){
          let hospital = result.hospitales.map((value : any) => {
            return {_id : value._id,name : value.name , img : value.img , typeSeach :"hospitales"}
          } )
          if(hospital){
            hospital.forEach(element => {
              this.data.push(element)
            });
           
          }
        }

        if(result.usuarios){
          let usuarios = result.usuarios.map((value : any) => {
            return {_id : value._id, name : value.name , img : value.img , typeSeach :"usuarios"}
          } )
          if(usuarios){
            usuarios.forEach(element => {
              this.data.push(element)
            });
           
          }
        }

        if(result.medicos){
          let medicos = result.medicos.map((value : any) => {
            return {_id : value._id,name : value.name , img : value.img , typeSeach :"medicos"}
          } )
          if(medicos){
            medicos.forEach(element => {
              this.data.push(element)
            });
           
          }
        }
    

        console.log(this.data)
      }
      
    })

  }

  updateImage(row){
    this._modalUploadService.showModal(row.typeSeach,row._id)
    this._modalUploadService.img = row.img
  }

  edit(row){
    switch(row.typeSeach){
      case 'hospitales':
        this._route.navigateByUrl("hospitales")
        break
      case 'medicos':
        this._route.navigate(["medico",row._id])
        break
      case 'usuarios':
        this._route.navigateByUrl("usuarios")
        break


    }
  }
}

interface dataseach {
  _id : string
  name :string
  img : string,
  typeSeach : string
}
