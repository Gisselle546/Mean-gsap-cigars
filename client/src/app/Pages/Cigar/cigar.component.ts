import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import {gsap} from 'gsap';




@Component({
  selector: 'app-cigar',
  templateUrl: './cigar.component.html',
  styleUrls: ['./cigar.component.css']
})
export class CigarComponent implements OnInit {
  
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
