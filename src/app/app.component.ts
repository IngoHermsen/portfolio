import { Component } from '@angular/core';
import { ViewService } from './core/services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  overflowScroll: boolean = false;

  constructor(
    public viewService: ViewService,
  ) {
    this.viewService.introFinished.subscribe((value) => {
      this.overflowScroll = value;
    })
  }
}
