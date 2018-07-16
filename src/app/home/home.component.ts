import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    var slider = document.getElementById("slider");
    console.log(slider);

    //Since the JQuery is loaded in the html file the $ variable is not recognized by the ts file but the code works perfectly
    $("#slider").responsiveSlides({
      auto: true,
      speed: 500,
      namespace: "callbacks",
      pager: true,
    });
    console.log("On Init");
  }

}
