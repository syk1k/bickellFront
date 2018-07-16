import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private title: Title) { 
    this.title.setTitle("Home");
  }

  ngOnInit(){
    console.log("Home component initialized");
    
    //Since the JQuery is loaded in the html file the $ variable is not recognized by the ts file but the code works perfectly
    $("#slider").responsiveSlides({
      auto: true,
      speed: 500,
      namespace: "callbacks",
      pager: true,
    });

  }

}
