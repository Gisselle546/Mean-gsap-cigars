import { ProductService } from 'src/app/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {gsap} from 'gsap';

@Component({
  selector: 'app-cigardetails',
  templateUrl: './cigardetails.component.html',
  styleUrls: ['./cigardetails.component.css']
})
export class CigardetailsComponent implements OnInit {
  
  currentproduct:any = null;

  constructor(
    private productService:ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getProduct(this.route.snapshot.paramMap.get("slug")!)
 
  }

  getProduct(slug:string):void{
    this.productService.getProduct(slug)
        .subscribe(
          product=>{
            this.currentproduct = product.product;
            console.log(this.currentproduct)
          } 
        )
  }

  



}
