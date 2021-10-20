import { Component, OnInit } from '@angular/core';

declare function  init_plugins();

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: [
  ]
})
export class NopagefoundComponent implements OnInit {


  annio : number = new Date().getFullYear()
  constructor() { }

  ngOnInit(): void {
    init_plugins()
  }

}