import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ViewService } from './core/services/view.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showAll: boolean = false;
  overflowScroll: boolean = false;

  constructor(
    public viewService: ViewService,
  ) {
    window.addEventListener('aos:in', () => {
      console.log('was here');

    })
    window.addEventListener('aos:out', () => {
      console.log('was here');

    })
    
    this.viewService.introFinished.subscribe((value) => {
      this.overflowScroll = value;
      this.showAll = value == true ? true : false;
    })
  }

  ngOnInit(): void {
    AOS.init();
  }


  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop
  }
}
