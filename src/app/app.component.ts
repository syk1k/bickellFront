import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms"

declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url: any;
  searchForm;
  constructor(private title: Title, private route: Router){
    this.title.setTitle("Home");
    this.route.events.subscribe(
      
      (url: NavigationEnd) => {
        this.url = url.url;
      }
    )
    console.log(this.url);
  }

  ngOnInit(){
    // This is for the search popup
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $(document).ready(function(){
      $(".memenu").memenu();
      console.log("Document ready");
    });

    this.searchForm = new FormGroup({
      recherche: new FormControl()
    });

  }
}
