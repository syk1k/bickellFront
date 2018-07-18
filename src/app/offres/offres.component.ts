import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from "../services/data.service";


@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  offres: Array<Articles>;
  constructor(private title: Title, private data: DataService) { 
    this.title.setTitle("Offres");
  }

  ngOnInit() {
    console.log("Offres component initialized");
    this.data.getOffreArticles().subscribe(
      data => {
        this.offres = data as Array<Articles>;
        console.log(this.offres);
      }
    )
  }

}

