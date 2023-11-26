import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject, Subscription, concat } from 'rxjs';
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

  // Observables:
  animationProcedure$!: Observable<any>;
  typeAnimationObs$!: Observable<any>;

  // Subscriptions:
  langChangeSubscription!: Subscription;
  typeAnimationSubscription!: Subscription;

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


  constructor(
    private translate: TranslateService,
    public viewService: ViewService
  ) {
  };


  ngOnInit(): void {
    this._setAnimatedStrings();

    this.smallView = window.innerWidth <= 1300;
    this.hideTag = window.innerWidth <= 1000;

    this.cursorInterval = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 450);
  };


  ngOnDestroy(): void {
    this.langChangeSubscription.unsubscribe();
  };


  ngAfterViewInit(): void {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(e => {
      this._setAnimatedStrings();
      this.langChangeSubscription.unsubscribe();

      this.animationProcedure$ = new Observable(observer => {
        concat(
          this._provideTypeAnimationObs(this.h1TagOpen, this.h1TagOpenEl),
          this._provideTypeAnimationObs(this.greeting, this.iAmTextEl),
          this._provideDeleteAnimationObs(this.greeting, this.iAmTextEl),
          this._provideTypeAnimationObs(this.iAmText, this.iAmTextEl),
          this._provideTypeAnimationObs(this.nameText, this.nameTextEl),
          this._provideTypeAnimationObs(this.titleTagOpen, this.titleTagOpenEl),
          this._provideTypeAnimationObs(this.jobTitle, this.jobTitleTextEl),
        ).subscribe()
      });


      setTimeout(() => {
        this.typeAnimationSubscription = this.animationProcedure$.subscribe();
        sessionStorage.setItem('loaded', '');
      }, this._setIntroDelay())
    })
  };


  _setIntroDelay() {
    let delay: number = sessionStorage.getItem('loaded') !== null ? 225 : 1000;
    return delay;
  };


  _setAnimatedStrings() {
    this.iAmText = this.translate.instant('title.iAm');
    this.greeting = this._setDaytimeGreeting();
  };


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
  };


  _provideTypeAnimationObs(string: string, targetElement: ElementRef, isIAmText?: boolean) {
    return new Observable<any>(observer => {
      let processedCharacter: number = 0;

      this.typingInterval = setInterval(() => {
        targetElement.nativeElement.innerHTML += string.charAt(processedCharacter);
        processedCharacter++;

        if (processedCharacter == string.length) {
          this._setAnimationProgress(string);
          clearInterval(this.typingInterval);
          observer.complete();
        }
      }, 70);
    });
  };


  _provideDeleteAnimationObs(string: string, targetElement: ElementRef) {
    return new Observable<any>(observer => {

      let remainingLength: number = string.length;
      this.timeout = setTimeout(() => {
        clearTimeout(this.timeout)
        this.typingInterval = setInterval(() => {
          if (remainingLength > 0) {
            remainingLength--;
            targetElement.nativeElement.innerHTML = string.slice(0, remainingLength)
          } else {
            clearInterval(this.typingInterval);
            observer.complete()
          }
        }, 70)
      }, 1200);
    })
  };


  _setAnimationProgress(finishedString: string) {
    switch (finishedString) {
      case ('<h1>'): this.h1TagFinished = true; break;
      case ('<title>'): this.titleTagFinished = true; break;
      case (this.iAmText): this._setIAmBehaviour(); break;
      case (this.nameText): this.firstLineFinished = true; break;
      case (this.jobTitle): this._finishAnimation(); break;
      default: break;
    }
  };


  _setIAmBehaviour() {
    if (window.innerWidth <= 1000) {
      setTimeout(() => {
        this.hideIAmText = true;
      }, 1000)
    }
  }


  _finishAnimation() {
    this.secondLineFinished = true;
    this.typeAnimationSubscription.unsubscribe();
    this.viewService.introFinished.next(true);
    this._setFinalState();
  };


  _setFinalState() {
    this.h1TagOpenEl.nativeElement.innerText = this.h1TagOpen;
    this.h1TagFinished = true;
    this.titleTagFinished = true;
    this.firstLineFinished = true;
    this.secondLineFinished = true;
    this.finalView = true;
    this.hideIAmText = window.innerWidth <= 1000;

    this._setElementsInnerText();
    this._setLanguageChangeSubscription();
  };


  _setElementsInnerText() {
    this.iAmTextEl.nativeElement.innerText = this.translate.instant('title.iAm');
    this.nameTextEl.nativeElement.innerText = this.nameText;
    this.titleTagOpenEl.nativeElement.innerText = this.titleTagOpen;
    this.jobTitleTextEl.nativeElement.innerText = this.jobTitle;
  };


  _setLanguageChangeSubscription() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(e => {
      this._setElementsInnerText();
    })
  };


  skipIntro() {
    clearTimeout(this.timeout);
    clearInterval(this.typingInterval);
    clearInterval(this.cursorInterval);
    this._finishAnimation();
  };

}