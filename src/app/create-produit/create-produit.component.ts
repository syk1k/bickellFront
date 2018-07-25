import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms"

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {

  produitForm;

  constructor() { 

  }

  ngOnInit() {
    this.produitForm = new FormGroup({
      
    })
  }

}
