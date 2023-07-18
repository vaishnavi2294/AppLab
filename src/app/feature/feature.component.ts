import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  imgFeature:string = "assets/images/planning.png";

  img:any[] = [
    {img:'assets/images/fastperform.png' , title:'App Development'},
    {img:'assets/images/vector.png' , title:'UX planning'},
    {img:'assets/images/prototype.png' , title:'Cloud Storage'},
    {img:'assets/images/fastperform.png' , title:'Customer Support'},
    
  ]
}
