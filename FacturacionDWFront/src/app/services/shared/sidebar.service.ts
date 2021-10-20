import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any[] = []
  
  // [
  //   {
  //     title : "Principal",
  //     icon:"mdi mdi-gauge",
  //     submenu:[
  //       {
  //         title:"Dashboard",
  //         url :"/dashboard"
  //       },
  //       {
  //         title:"Progress",
  //         url :"/progress"
  //       },
  //       {
  //         title:"chart",
  //         url :"/graficas1"
  //       },
  //       {
  //         title:"Setting",
  //         url :"/accountsetting"
  //       },
  //       {
  //         title:"Promesas",
  //         url:'/promesas'
  //       },
  //       {
  //         title:"Observable",
  //         url:"/rxjs"
  //       }
  //       // ,{
  //       //   title:"Perfil",
  //       //   url:"/profile"
  //       // }
  //     ]
  //   },
  //   {
  //     title : "Mantenimiento",
  //     icon:"mdi mdi-folder-lock-open",
  //     submenu:[
  //       {
  //         title:"usuarios",
  //         url :"/usuarios"
  //       },{
  //         title:"hospitales",
  //         url :"/hospitales"
  //       },{
  //         title:"medicos",
  //         url :"/medicos"
  //       }
  //     ]}
  // ]

  constructor() { }

  getMEnu() {
    return this.menu = JSON.parse(localStorage.getItem("menu"))
  }
  
}
