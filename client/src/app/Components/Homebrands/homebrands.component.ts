import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homebrands',
  templateUrl: './homebrands.component.html',
  styleUrls: ['./homebrands.component.css']
})
export class HomebrandsComponent implements OnInit {

  products:any;
  currentProduct = null;
  currentIndex = -1

  constructor(private productService:ProductService) { }
  

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts():void{
    this.productService.getProducts()
    .subscribe(
        products=>{
          this.products = products.products;
          console.log(this.products)
        }
    )
  }

}
