import { Component, OnInit, ValueProvider } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FileUploadValidators, FileUploadControl } from '@ng-forms/file-upload';
import { HttpHeaders } from '@angular/common/http';

import { DataService } from '../services/data.service';

declare var $;

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {

  produitForm;
  categories: Array<Category>;
  nocategory: string ="Create a categorie first";
  file: File;

  constructor(private data: DataService) { 

  }

  ngOnInit() {    

    this.produitForm = new FormGroup({
      lib_article: new FormControl(),
      type_activite: new FormControl(),
      type_offre: new FormControl(),
      description: new FormControl(),
      quantite: new FormControl(),
      prix: new FormControl(),
      unite: new FormControl(),
      user: new FormControl(),
      categorie: new FormControl(),
      images: new FormControl(null, FileUploadValidators.filesLimit(3)),
      
    })
  }

  fetchCategories(){
    this.data.getCategories().subscribe(
      data => {
        this.categories = data as Array<Category>;
        console.log(this.categories);
      }
    )
  }

  onSubmit(values){

    console.log(values.images);
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Token 21f30a249d150465b1a7e42e48b85a28924f8656"
      })
    }

    this.data.createArticle(values, httpOptions).subscribe(
      data => {
        console.log(data);
      }
    )

  }

}
