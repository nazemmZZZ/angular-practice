import { routesToUrl } from './../navagation';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
changed($event: Event) {
console.log('====================================');
console.log($event);
console.log('====================================');
}
  title = 'hotels-booking';
  public RoutesToUrl =routesToUrl
  constructor(public router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
       this.RoutesToUrl = this.RoutesToUrl.map((route) =>
         route.url === event.url
           ? { ...route, active: true }
           : { ...route, active: false }
       );
        console.log(this.RoutesToUrl)
      }
    });
    console.log(this.router.url)
  }
}
