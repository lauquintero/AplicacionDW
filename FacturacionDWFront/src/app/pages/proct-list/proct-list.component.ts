import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product/Product.service';

@Component({
  selector: 'app-proct-list',
  templateUrl: './proct-list.component.html',
  styleUrls: ['./proct-list.component.css']
})
export class ProctListComponent implements OnInit {

  productos : any[]
  constructor(
    private _producService : ProductService
  ) { }

  ngOnInit(): void {
    this.product()
  }

  product(){
    this._producService.getProduct().subscribe((response : any) => {
      console.log(response)
      this.productos = response
    })   
  }

  productStock(){
    this._producService.GetProductStock().subscribe((response : any) => {
      console.log(response)
      this.productos = response
    })
  }

  productAno(){
    this._producService.GetProductAno().subscribe((response : any) => {
      console.log(response)
      this.productos = response
    })
  }

}
