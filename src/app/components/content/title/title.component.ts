import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
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
  introSkipped: boolean = false;

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

    setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 450);

    this.typeState.subscribe((value) => {
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
    let processedCharacters: number = 0;

    Array.from(string).forEach((character, index) => {
      let timer = this.introSkipped ? 0 : index * 90
      setTimeout(() => {
        targetElement.nativeElement.innerHTML += character;
        processedCharacters++;

        if (processedCharacters == string.length) {
          if (isIAmText) {
            this.checkIfHideIAmText()
          }

          this.typeState.next(string);
        }
      }, timer)
    })
  }

  finishH1Tag() {
    setTimeout(() => {
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
    setTimeout(() => {
      let interval = setInterval(() => {
        if (remainingLength > 0) {
          remainingLength--;
          this.iAmTextEl.nativeElement.innerHTML = this.greeting.slice(0, remainingLength)
        } else {
          clearInterval(interval);
          this.typeState.next('greetingDeleted')
        }
      }, this.setSpeed(75, 0))
    }, this.setSpeed(1200, 0))

  }

  finishFirstLine() {
    this.firstLineFinished = true;
    setTimeout(() => {
      this.typeStrings(this.titleTagOpen, this.titleTagOpenEl);
    }, this.setSpeed(600, 300))
  }

  finishSecondLine() {
    this.secondLineFinished = true;
    this.viewService.introFinished.next(true);
  }

  checkIfHideIAmText() {

    this.hideIAmText = window.innerWidth <= 420;
  }

  skipIntro() {
    this.introSkipped = true;

  }

  setSpeed(normalSpeed: number, fastSpeed: number) {
    return this.introSkipped ? fastSpeed : normalSpeed
  }
}