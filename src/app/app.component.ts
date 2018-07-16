import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url: any;
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

    
  }
}
