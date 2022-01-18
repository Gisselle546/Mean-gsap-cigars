
import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import {DialogComponent} from '../../../Shared/Dialog/dialog.component';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  


  constructor(public dialog: MatDialog,public localStorageService: LocalStorageService) { }

  TLLOAD = gsap.timeline({
    default: {
      ease: "power2"
    }
  });
  

  ngOnInit(): void {

    this.aniclaw();
   

    if(!this.localStorageService.get('user')){
      const dialogRef = this.dialog.open(DialogComponent, {
        height: '50vh',
        width: '50%',
        
     }); 
     return;
    
    }
    this.scrollanim()
  
  }

  aniclaw():void{
    this.TLLOAD.from(".header",{
      duration:0.8,
      opacity:0,
      y: -20,
      stagger:0.2,
      delay:0.4 
    })
    .from(".cigarimage",{
      duration:0.6,
      opacity:0,
      x:20,
      delay:0.4

    })
  }

  scrollanim():void{
    gsap.to(".homebrands",{
      scrollTrigger:{
        trigger:".button",
        start: "top top+=400",
        end:"bottom",
        
      },
      y:"24px",
      ease:"back",
      duration:2
    })

  }




}
