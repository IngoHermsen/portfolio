import { Component } from '@angular/core';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  showThis: boolean = false;
  active: string = '';

  constructor(
    public viewService: ViewService
  ) {
    this.viewService.introFinished.subscribe((value) => {  
      console.log('show value', value);
          
      this.showThis = value;
    })

    this.viewService.activeSection.subscribe((sectionName) => {
      this.active = sectionName;
    })
  }
}
