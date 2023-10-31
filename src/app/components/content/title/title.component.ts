import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription, timeInterval } from 'rxjs';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, AfterViewInit {
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
  iAmText = "Ich bin";
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
    public viewService: ViewService
  ) {
    this.viewService.introFinished.subscribe((value) => {
      this.finalView = value;
    })
  }

  ngOnInit(): void {
    this.smallView = window.innerWidth <= 1300;
    this.hideTag = window.innerWidth <= 1000;
    this.greeting = this.getDaytimeGreeting();

    this.cursorInterval = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 450);

    this.typingSubscription = this.typeState.subscribe((value) => {
      switch (value) {
        case this.h1TagOpen: this.finishH1Tag(); break;
        case this.greeting: this.deleteGreeting(); break;
        case 'greetingDeleted': this.typeStrings(this.iAmText, this.iAmTextEl, true); break;
        case this.iAmText: this.typeStrings(this.nameText, this.nameTextEl); break;
        case this.nameText: this.finishFirstLine(); break;
        case this.titleTagOpen: this.finishTitleTag(); break;
        case this.jobTitle: this.finishSecondLine(); break;
      }
    })
  }

  getDaytimeGreeting() {
    let date = new Date();
    let hours = date.getHours();

    if (hours <= 11) {
      return "Guten Morgen."
    } else if (hours <= 17) {
      return "Guten Tag."
    } else {
      return "Guten Abend."
    }
  }

  ngAfterViewInit(): void {
    this.typeStrings(this.h1TagOpen, this.h1TagOpenEl);

  }

  typeStrings(string: string, targetElement: ElementRef, isIAmText?: boolean) {
    let processedCharacter: number = 0;
   
      this.typingInterval = setInterval(() => {
        targetElement.nativeElement.innerHTML += string.charAt(processedCharacter);
        processedCharacter++;
        
        if (processedCharacter == string.length) {
          if (isIAmText) {
            this.checkIfHideIAmText()
          }
          clearInterval(this.typingInterval);
          this.typeState.next(string);
        }
      }, 120)
    
  }

  finishH1Tag() {
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout)
      this.h1TagFinished = true;
      this.typeStrings(this.greeting, this.iAmTextEl);
    }, 150)
  }

  finishTitleTag() {
    this.titleTagFinished = true;
    this.typeStrings(this.jobTitle, this.jobTitleTextEl);
  }

  deleteGreeting() {
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
      }, 75)
    }, 1200)

  }

  finishFirstLine() {
    this.firstLineFinished = true;
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout);
      this.typeStrings(this.titleTagOpen, this.titleTagOpenEl);
    }, 600)
  }

  finishSecondLine() {
    this.secondLineFinished = true;
    this.viewService.introFinished.next(true);
  }

  checkIfHideIAmText() {

    this.hideIAmText = window.innerWidth <= 420;
  }

  skipIntro() {        
    clearTimeout(this.timeout);
    clearInterval(this.typingInterval);
    clearInterval(this.cursorInterval);
    this.typingSubscription.unsubscribe();

    this.setFinalState();
    this.viewService.introFinished.next(true);
  }

  setFinalState() {
    this.h1TagOpenEl.nativeElement.innerText = this.h1TagOpen;

    this.iAmTextEl.nativeElement.innerText = this.iAmText;
    this.nameTextEl.nativeElement.innerText = this.nameText;
    this.titleTagOpenEl.nativeElement.innerText = this.titleTagOpen;
    this.jobTitleTextEl.nativeElement.innerText = this.jobTitle;
  
    this.cursorVisible = false;
    this.h1TagFinished = true;
    this.titleTagFinished = true;
    this.firstLineFinished = true;
    this.secondLineFinished = true;
    this.finalView = true;

    
  }
}