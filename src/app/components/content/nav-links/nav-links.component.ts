import { Component } from '@angular/core';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent {
  active: string = '';

  constructor(
    public viewService: ViewService
  ) {
    this.viewService.activeSection.subscribe((sectionName) => {
      this.active = sectionName;
    })
  }
}
