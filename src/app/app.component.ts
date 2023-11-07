import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy{
  langChangeSubscription: Subscription;

  constructor(
    public translate: TranslateService,
  ) {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((e) => {
      sessionStorage.setItem('language', e.lang);
    });
    
    translate.setDefaultLang('de');
    translate.use(sessionStorage.getItem('language') ?? translate.getBrowserLang() ?? translate.getDefaultLang())
  }

  ngOnDestroy(): void {    
    this.langChangeSubscription.unsubscribe();
  }
}




