import { MobileComponent } from './mobile/mobile.component';
import { WebComponent } from './web/web.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './Home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent ,children:[
    {path:'web' , component:WebComponent},
    {path:'mobile' , component:MobileComponent}
  ]},
  {path:'contact' , component:ContactComponent},
  {path:'gallary' , component:GalleryComponent},
  {path:'**' , component:Notfound404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
