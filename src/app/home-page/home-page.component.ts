import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { imageList } from 'src/images';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent {
  public images = imageList;
  public privew = 0;

  next() {
    if (this.privew === this.images.length - 1) this.privew = -1;
    this.privew++;
    console.log(this.images.length);
    console.log(this.privew);
  }
  prev() {
    if (this.privew === 0) this.privew = this.images.length;
    this.privew--;
    console.log(this.images.length);
    console.log(this.privew);
  }
}
