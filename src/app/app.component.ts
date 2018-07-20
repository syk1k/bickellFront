import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms"

import { CookieService } from "ngx-cookie-service";

declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url: any;
  searchForm;
  token: any;
  notLoggedIn: Boolean = true;
  
  constructor(private title: Title, private route: Router, private cookie: CookieService){
    this.title.setTitle("Home");
    this.route.events.subscribe(
      
      (url: NavigationEnd) => {
        this.url = url.url;
      }
    );
    this.token = this.cookie.get("token");
    if (this.token){
      this.notLoggedIn = false;
    }
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

  logout(){
    console.log("Logout");
    this.token = null;
    this.cookie.delete("token");
    this.notLoggedIn = true;
  }
}
