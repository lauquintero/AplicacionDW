import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})

export class ProgressComponent implements OnInit {

  
  progress1 : any = 10;
  progress2 : any = 20;

  constructor() { }

  ngOnInit(): void {
  }


  // cambiarvalor(value : number)
  // {
  //   if(typeof(this.progress)=="string"){
  //     this.progress = parseInt(this.progress)
  //   }

  //   if( (this.progress >= 100 && value >0 ) || (this.progress<=0 && value <0 ))
  //     return 

  //   this.progress += value
  // }

}
