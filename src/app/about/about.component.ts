import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mainColor:string='color:#2C3E50';
  iconColor:string='color:#2C3E50 ; font-size:50px';
  parent:string='pb-4 pt-4 mt-5 text-center d-flex flex-column align-items-center'

  constructor() { }

  ngOnInit(): void {
  }

}
