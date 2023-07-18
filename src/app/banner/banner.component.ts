import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  imgLeft: String = 'assets/images/featureLeft.png';
  imgIcon:any[] = [
    {img: 'assets/images/fastperform.png', title: 'Fast Performince', color:'red'},
    {img:'assets/images/prototype.png', title: 'Prototyping' , color:'blue'},
    {img:'assets/images/vector3.png', title: 'Vector Editing' , color:'green'}
  ]
  imgIconOne:any[] = [
    {img: 'assets/images/fastperform.png', title: 'Automatic Payouts', color:'red'},
    {img:'assets/images/prototype.png', title: 'Network Effect' , color:'blue'},
    {img:'assets/images/vector3.png', title: 'Bigger rewards Method' , color:'green'}
  ]
 imgArray : any[] = [
 'assets/images/banner1.png',
 'assets/images/anubis.png',
 'assets/images/maniac.png',
 'assets/images/express.png',
 'assets/images/banner1.png'
 ]
title:any[] = [ , 'Prototyping','Vector Editing']
 
}
