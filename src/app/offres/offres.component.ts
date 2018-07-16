import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle("Offres");
  }

  ngOnInit() {
    console.log("Offres component initialized");
  }

}
