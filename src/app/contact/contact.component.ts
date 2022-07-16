import { User } from './../user';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  mainColor:string='color:#2C3E50';
  iconColor:string='color:#2C3E50 ; font-size:50px';
  parent:string='container mt-5 pt-4 text-center d-flex flex-column align-items-center'
  
  names:string[]=['ahmed','mohammed','ebrahim','esmail','nasser']
  hellow(){
    alert('fooooooooooL.................')
  }
  users:User[]=[
    {name:'ahmed',age:23,salary:300,city:'cairo'},
    {name:'mohammed',age:23,salary:900,city:'bani suef'},
    {name:'salama',age:34,salary:500,city:'zz'},
    {name:'moustafa',age:97,salary:700,city:'cairo'},
    {name:'ebrahem',age:55,salary:100,city:'alex'},
]

}