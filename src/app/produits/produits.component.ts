import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  articles: Array<Articles>;
  
  constructor(private title: Title, private data: DataService) {
    this.title.setTitle("Produits");
  }

  ngOnInit() {
    this.data.getArticles().subscribe(
      data => {
        this.articles = data as Array<Articles>
      }
    )
  }

}
