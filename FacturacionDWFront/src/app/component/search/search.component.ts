import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {



  @Input() placeolder : string
  @Input() disableInput : boolean = false


  @Output() searchOut = new EventEmitter<boolean>()
  
  @ViewChild("inputShearch") inputShearch : ElementRef
  constructor() { }

  ngOnInit(): void {

  }

  search(){
    let value = this.inputShearch.nativeElement.value
    this.searchOut.emit(value)
  }

}
