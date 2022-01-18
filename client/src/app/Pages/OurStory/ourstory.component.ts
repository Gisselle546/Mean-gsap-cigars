import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';



@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.css']
})
export class OurstoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  this.anim( )
  
  }




anim():void{
  gsap.from(".para",{
    duration:0.8,
    opacity:0,
    y: -20,
    stagger:0.2,

  })
}


}
