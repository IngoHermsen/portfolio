import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ContentChildren, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewService } from './core/services/view.service';
import * as AOS from 'aos';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  viewElements: Array<any> = [];
  currentViewIndex = 0;
  currentScrollYPosition = 0;

  @ViewChildren('titleDiv, aboutMeDiv, skillsDiv, projectsDiv, contactDiv')
  public contentDivElements!: QueryList<ElementRef>;

  @HostListener('mousewheel', ['$event'])
  public onViewportScroll() {
    let direction = this.scrollDirection();

    if (direction == "down" && this.notAtBottomEnd()) {

      this.scrollDownProcedure();
    } else if (direction == "up" && this.notAtTopStart()) {

      this.scrollUpProcedure();

    }
  }

  scrollDownProcedure() {
    let nextViewElement = this.viewElements[this.currentViewIndex + 1]
    const boundingRect = nextViewElement.nativeElement.getBoundingClientRect()
    if (boundingRect.top <= window.innerHeight) {
      this.viewService.jumpToSection(nextViewElement.nativeElement.id);

      this.currentViewIndex++;
    }

  }

  scrollUpProcedure() {
    console.log('Scroll Up Procedure called');

    let previousViewElement = this.viewElements[this.currentViewIndex - 1]
    const boundingRect = previousViewElement.nativeElement.getBoundingClientRect()

    if (boundingRect.bottom >= (window.innerHeight * 0.99)) {

      this.viewService.jumpToSection(previousViewElement.nativeElement.id);

      this.currentViewIndex--;

    }

  }

  notAtBottomEnd() {
    console.log(this.currentViewIndex < this.viewElements.length - 1);

    return (this.currentViewIndex < this.viewElements.length - 1);
  }

  notAtTopStart() {
    console.log('this.currentViewIndex', this.currentViewIndex);

    return (this.currentViewIndex > 0);
  }


  scrollDirection() {
    let scrollDistance = window.scrollY - this.currentScrollYPosition;

    if (scrollDistance > 0) {
      this.currentScrollYPosition = window.scrollY
      return "down";
    } else if (scrollDistance < 0) {
      this.currentScrollYPosition = window.scrollY;
      return "up";
    } else {
      return "stop"
    }
  }



  showAll: boolean = false;
  overflowScroll: boolean = false;



  constructor(
    public elementRef: ElementRef,
    public viewService: ViewService,
  ) {
    this.viewService.introFinished.subscribe((value) => {
      this.overflowScroll = value;
      this.showAll = value == true ? true : false;

    })
  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.contentDivElements.changes
      .subscribe((elements: QueryList<any>) => {
        this.viewElements = elements.toArray();
        console.log(this.viewElements, "view elements");


      })

  };


}




