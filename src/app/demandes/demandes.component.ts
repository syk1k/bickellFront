import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  demandes: Array<Articles>;
  constructor(private title: Title, private data: DataService) { 
    this.title.setTitle("Demandes");
  }

  ngOnInit() {
    console.log("Demandes component initialized");
    this.data.getDemandeArticles().subscribe(
      data => {
        this.demandes = data as Array<Articles>;
        console.log(this.demandes);
      }
    )
  }

}
