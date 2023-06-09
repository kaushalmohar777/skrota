import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./home-responsive.component.scss'],
})
export class HomeComponent {
   constructor(private scroller: ViewportScroller, private router: Router) {}

   scrollPoint1() {
     this.router.navigate([], { fragment: "carform" });
  }

}
