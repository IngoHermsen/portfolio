import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  swingImgAnimation: boolean = false;
  showImageArea: boolean = true;
  showPublicMediaLinks: boolean = false;

  
@HostListener('window:resize', ['$event'])
onResize() {
  this.showImageArea = window.innerWidth <= 850 ? false : true;
  this.showPublicMediaLinks = window.innerWidth <= 650 ? true : false
}


  constructor() {

  }

  ngOnInit(): void {
    AOS.init();
    this.showImageArea = window.innerWidth <= 850 ? false : true;
    this.showPublicMediaLinks = window.innerWidth <= 650 ? true : false
  }

  ngAfterViewInit(): void {
    document.addEventListener('aos:in:image', ({ }) => {
      this.swingImgAnimation = true;

    });

    document.addEventListener('aos:out', ({ }) => {
      this.swingImgAnimation = false;
      
    });

  }

}

