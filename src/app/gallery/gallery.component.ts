import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
// import * as $ from "jquery";
declare var $:any;
 enableProdMode();

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

     productPrice:number=500;
     userName:string='ahmed'

    //   images src
    //  src:string[]=['../../assets/cabin.png','../../assets/cake.png','../../assets/circus.png','../../assets/game.png','../../assets/safe.png','../../assets/submarine.png']
    //  getUrl(url:string){
    //  let imgSrc:String=url;
    // //  $('.caption').classList.replace('d-none' , 'd-flex')
    // //  alert(imgSrc)
    //  }

    //  styles
     parent:string='container mt-5 pt-4 text-center d-flex flex-column align-items-center'
     mainColor:string='color:#2C3E50'
     iconColor:string='color:#2C3E50 ; font-size:50px'
  constructor() { }

  ngOnInit(): void {
    // for(var i=0 ; i<6 ; i++){  .eq(i)
    $('.layer').click(function() {
      
      $('.caption').css("display" ,"flex");
    var src = $(`img`).attr("src")
    $('.caption .image img').attr("src",src)
      // alert(src)
    // alert('ssssssssssss'
      })
    // }

      $('.caption .ico i').click(function() {
        $('.caption').css("flex" ,"display");
        alert('ykftyfyfyf')
      })






  }



}
