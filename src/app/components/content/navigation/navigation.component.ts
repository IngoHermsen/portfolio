import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
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
  titleVisible: boolean = true;

  constructor(
    public router: Router,
    public viewService: ViewService
  ) {
    this.viewService.introFinished.subscribe((value) => {  
      console.log('show value', value);
          
      this.showThis = value;
    })

    this.showTopNavLinks = window.innerWidth >= 1000 ? true : false;

    this.router.events.subscribe((events) => {
      if(events instanceof NavigationEnd) {
        this.showLogo = events.url != '/main#title' ? true : false;
      }              
    })
  }

  toggleOverlayMenu() {
    const navOverlayIsOpened: boolean = this.viewService.showNavOverlay.getValue()
    this.viewService.showNavOverlay.next(!navOverlayIsOpened)
  }

  
}
