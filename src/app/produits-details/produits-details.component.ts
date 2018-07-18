import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.component.html',
  styleUrls: ['./produits-details.component.css']
})
export class ProduitsDetailsComponent implements OnInit {

  articleId: number;
  article: Articles;
  categories : Array<Category>;
  constructor(private route: ActivatedRoute, private data: DataService) { 
  }

  ngOnInit() {
    this.route.params.subscribe( data => {
      this.articleId = data.id;
      console.log(this.articleId);
      this.data.getArticle(this.articleId).subscribe( data => {
        this.article = data as Articles;
        console.log(this.article);
      })
    });

    this.data.getCategories().subscribe(
      data => {
        this.categories = data as Array<Category>;
        console.log(this.categories)
      }
    )
  }

}
