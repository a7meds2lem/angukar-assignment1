import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userName:string="{ahmed salem}";
  urlImg:string='../../assets/_1_ (1).webp';
  width:number=400
  clickL(){
    alert('home')
  }
}