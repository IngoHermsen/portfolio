import { Component, HostListener } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  showThis: boolean = false;
  showLogo: boolean = false;
  showTopNavLinks: boolean = false;
  showOverlayToggleText: boolean = false;
  titleVisible: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showTopNavLinks = window.innerWidth >= 1000;
    this.showOverlayToggleText = window.innerWidth <= 390;
  }


  constructor(
    public translate: TranslateService,
    public router: Router,
    public viewService: ViewService
  ) {
    this.viewService.introFinished.subscribe((value) => {  
      this.showTopNavLinks = window.innerWidth >= 1000 ? true : false;
      this.showThis = value;
    })


    this.router.events.subscribe((events) => {
      if(events instanceof NavigationEnd) {
        this.showLogo = events.url != '/app#title' ? true : false;
      }              
    })
  }

  toggleOverlayMenu() {
    const navOverlayIsOpened: boolean = this.viewService.showNavOverlay.getValue()
    this.viewService.showNavOverlay.next(!navOverlayIsOpened)
  }

  
}
