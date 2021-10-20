import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progress : number

  @Output()progressEvent : EventEmitter<number> = new EventEmitter()

  @ViewChild('progresss') txtProgress : ElementRef 

  constructor() {
   }

  ngOnInit(): void {
  }

  cambiarvalor(value : number)
  {
    if(typeof(this.progress)=="string"){
      this.progress = parseInt(this.progress)
    }

    if( (this.progress >= 100 && value >0 ) || (this.progress<=0 && value <0 ))
      return 

    this.progress += value
    this.emit()
  }

  onChangedText(value){
    if(value>100){
      this.progress = 100
      this.txtProgress.nativeElement.value = 100
    } else if (value<0){
      this.progress = 0
      this.txtProgress.nativeElement.value = 0
    }

    this.emit()
  }

  emit(){
    this.progressEvent.emit(this.progress)
  }

}
