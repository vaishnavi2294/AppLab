import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 footerBrand:string= "assets/images/footer-logo.png";
 socialLink:string= "assets/images/social-footer.png";
 googleplay:String = "assets/images/googleplay.png";
 appstore:String= "assets/images/appStore.png";
 downloadImg:string = "assets/images/download.png";

}
