import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subject, Subscriber, Subscription, timeInterval } from 'rxjs';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy, AfterViewInit {
  smallView: boolean = false;
  hideTag: boolean = false;
  finalView: boolean = false;
  actualDateHours: number = 0;
  hideIAmText: boolean = false;

  // Timers:
  typingInterval: any;
  cursorInterval: any;
  timeout: any;

  // Subscriptions:
  typingSubscription!: Subscription;


  @ViewChild('h1TagOpen') h1TagOpenEl!: ElementRef;
  @ViewChild('iAmText') iAmTextEl!: ElementRef;
  @ViewChild('nameText') nameTextEl!: ElementRef;
  @ViewChild('titleTagOpen') titleTagOpenEl!: ElementRef;
  @ViewChild('jobTitleText') jobTitleTextEl!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.smallView = window.innerWidth <= 1300;
    this.hideTag = window.innerWidth <= 1000;
  }

  greeting = "";

  iAmText = "";
  nameText = "Ingo Hermsen"
  jobTitle = "Frontend Developer.";

  h1TagOpen = "<h1>";
  h1TagClose = "</h1>";
  titleTagOpen = "<title>";
  titleTagClose = "</title>";

  cursorVisible: boolean = false;
  h1TagFinished: boolean = false;
  titleTagFinished: boolean = false;

  firstLineFinished: boolean = false;
  secondLineFinished: boolean = false;

  typeState: Subject<string> = new Subject();

  // Translate Subscription;
  langChangeSubscription!: Subscription;

  constructor(
    private translate: TranslateService,
    public viewService: ViewService
  ) {

    this.viewService.introFinished.subscribe((value) => {
      this.finalView = value;
    });

  }

  ngOnInit(): void {
    this._setAnimatedStrings();

    this.smallView = window.innerWidth <= 1300;
    this.hideTag = window.innerWidth <= 1000;

    this.cursorInterval = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 450);

    this.typingSubscription = this.typeState.subscribe((value) => {
      switch (value) {
        case this.h1TagOpen: this._finishH1Tag(); break;
        case this.greeting: this._deleteGreeting(); break;
        case 'greetingDeleted': this._typeStrings(this.iAmText, this.iAmTextEl, true); break;
        case this.iAmText: this._typeStrings(this.nameText, this.nameTextEl); break;
        case this.nameText: this._finishFirstLine(); break;
        case this.titleTagOpen: this._finishTitleTag(); break;
        case this.jobTitle: this._finishSecondLine(); break;
      }
    })
  };

  ngOnDestroy(): void {
    this.langChangeSubscription.unsubscribe();
  };

  ngAfterViewInit(): void {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(e => {
      this._setAnimatedStrings();
      console.log(this.iAmText);
      this._typeStrings(this.h1TagOpen, this.h1TagOpenEl);
      this.langChangeSubscription.unsubscribe();
    })
    

  };

  _setAnimatedStrings() {
    this.iAmText = this.translate.instant('title.iAm');
    this.greeting = this._setDaytimeGreeting();
  }

  _setDaytimeGreeting() {
    let date = new Date();
    let hours = date.getHours();

    if (hours <= 11) {
      return this.translate.instant('title.greetings.goodMorning')
    } else if (hours <= 17) {
      return this.translate.instant('title.greetings.goodAfternoon')
    } else {
      return this.translate.instant('title.greetings.goodEvening')
    }
  }

  _typeStrings(string: string, targetElement: ElementRef, isIAmText?: boolean) {
    let processedCharacter: number = 0;

    this.typingInterval = setInterval(() => {
      targetElement.nativeElement.innerHTML += string.charAt(processedCharacter);
      processedCharacter++;

      if (processedCharacter == string.length) {
        if (isIAmText) {
          this._checkIfHideIAmText()
        }
        clearInterval(this.typingInterval);
        this.typeState.next(string);
      }
    }, 70)

  }

  _finishH1Tag() {
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout)
      this.h1TagFinished = true;
      this._typeStrings(this.greeting, this.iAmTextEl);
    }, 150)
  }

  _finishTitleTag() {
    this.titleTagFinished = true;
    this._typeStrings(this.jobTitle, this.jobTitleTextEl);
  }

  _deleteGreeting() {
    let remainingLength: number = this.greeting.length;
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout)
      this.typingInterval = setInterval(() => {
        if (remainingLength > 0) {
          remainingLength--;
          this.iAmTextEl.nativeElement.innerHTML = this.greeting.slice(0, remainingLength)
        } else {
          clearInterval(this.typingInterval);
          this.typeState.next('greetingDeleted')
        }
      }, 70)
    }, 1200)

  }

  _finishFirstLine() {
    this.firstLineFinished = true;
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout);
      this._typeStrings(this.titleTagOpen, this.titleTagOpenEl);
    }, 600)
  }

  _finishSecondLine() {
    this.secondLineFinished = true;
    this.viewService.introFinished.next(true);
    this._setFinalState()
  }

  _checkIfHideIAmText() {

    this.hideIAmText = window.innerWidth <= 420;
  }

  skipIntro() {
    clearTimeout(this.timeout);
    clearInterval(this.typingInterval);
    clearInterval(this.cursorInterval);
    this.typingSubscription.unsubscribe();

    this._setFinalState();
    this.viewService.introFinished.next(true);
  }

  _setFinalState() {
    this.h1TagOpenEl.nativeElement.innerText = this.h1TagOpen;
    this.h1TagFinished = true;
    this.titleTagFinished = true;
    this.firstLineFinished = true;
    this.secondLineFinished = true;
    this.finalView = true;

    this._setElementsInnerText();
    this.setLanguageChangeSubscription();
  }

  _setElementsInnerText() {
    this.iAmTextEl.nativeElement.innerText = this.translate.instant('title.iAm');
    this.nameTextEl.nativeElement.innerText = this.nameText;
    this.titleTagOpenEl.nativeElement.innerText = this.titleTagOpen;
    this.jobTitleTextEl.nativeElement.innerText = this.jobTitle;
  }

  setLanguageChangeSubscription() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(e => {
      this._setElementsInnerText();
    })
  }
}