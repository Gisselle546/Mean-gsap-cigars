import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FooterComponent } from './Shared/Footer/footer.component';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { HomeComponent } from './Pages/Home/home/home.component';
import { DialogComponent } from './Shared/Dialog/dialog.component';
import { HomebrandsComponent } from './Components/Homebrands/homebrands.component';
import { LeafgridComponent } from './Components/leafgrid/leafgrid.component';
import { CigarComponent } from './Pages/Cigar/cigar.component';
import { CigardetailsComponent } from './Pages/Cigar/cigardetails.component';
import { OurstoryComponent } from './Pages/OurStory/ourstory.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DialogComponent,
    HomebrandsComponent,
    LeafgridComponent,
    CigarComponent,
    CigardetailsComponent,
    OurstoryComponent,
    
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
 entryComponents:[DialogComponent]

 
})
export class AppModule { }
