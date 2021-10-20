import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {
   

    this.countThree().then((mensaje : any)=>{
      console.log('termino',mensaje)
    }
    ).catch(error => console.log("Ocurrio un error" , error))

   }

  ngOnInit(): void {
  }


  countThree() : Promise<boolean> {
    
    //let promesa = 
    return new Promise<boolean>( (resolve,reject) =>{
      let count : number = 0

      let interval = setInterval(() => {
        count ++
        console.log(count)
        if(count===3){          
          //reject('un error');  // retorna mensaje de error
          resolve(true);
          clearInterval(interval)
        }
      },1000)
    });
    //return promesa
  }

}
