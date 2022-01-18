import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor() { }

 
navbarChangeColor:boolean = false


  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true)
  }
 

  scroll = (): void => {
    
    if (window.scrollY > 30) {
       this.navbarChangeColor = true;
     
    } else {
       this.navbarChangeColor = false;

       
    }


  }

}
