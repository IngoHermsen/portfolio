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
  active: string = '';
  titleVisible: boolean = true;

  constructor(
    public router: Router,
    public viewService: ViewService
  ) {
    this.viewService.introFinished.subscribe((value) => {  
      console.log('show value', value);
          
      this.showThis = value;
    })

    this.viewService.activeSection.subscribe((sectionName) => {
      this.active = sectionName;
    })

    this.router.events.subscribe((events) => {
      if(events instanceof NavigationEnd) {
        this.showLogo = events.url != '/main#title' ? true : false;
      }              
    })
  }

  
}
