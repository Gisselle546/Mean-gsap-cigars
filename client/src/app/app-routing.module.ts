import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { CigarComponent } from './Pages/Cigar/cigar.component';
import { CigardetailsComponent } from './Pages/Cigar/cigardetails.component';
import { OurstoryComponent } from './Pages/OurStory/ourstory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "cigars", component:CigarComponent},
  { path: "cigars/:slug", component:CigardetailsComponent},
  { path: "ourstory",component:OurstoryComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
