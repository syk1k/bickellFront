import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Array<Articles>
  constructor(private title: Title, private data: DataService) { 
    this.title.setTitle("Home");
  }

  ngOnInit(){
    console.log("Home component initialized");
    
    $("#slider").responsiveSlides({
      auto: true,
      speed: 500,
      namespace: "callbacks",
      pager: true,
    });

    this.data.getArticles().subscribe(
      data => {
        this.articles = data as Array<Articles>;
        console.log(this.articles);
      }
    )
  }


}
