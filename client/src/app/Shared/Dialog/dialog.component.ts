import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/Services/local-storage.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})



export class DialogComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<DialogComponent>,public localStorageService: LocalStorageService) {}

  overtwentyone:boolean=this.localStorageService.get("user")



  ngOnInit() {
    if(this.overtwentyone){
      this.dialogRef.close();
    }
  }
 
  yesDialog(){
    
    this.dialogRef.close();
    this.localStorageService.set("user",true);
  }

  noOpen(){
    this.overtwentyone = false;
  }

 

}
