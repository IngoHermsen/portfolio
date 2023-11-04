import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

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


  constructor(
    private translate: TranslateService,
  ) {

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

