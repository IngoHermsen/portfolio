import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as AOS from 'aos';
import { map } from 'rxjs';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit  {
  viewElements: Array<any> = [];
  showNavOverlay: boolean = true;
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
    let nextViewElement = this.viewElements[this.viewService.currentViewIndex + 1]
    const boundingRect = nextViewElement.nativeElement.getBoundingClientRect()
    if ((boundingRect.top-80)<= (window.innerHeight * 0.8)) {
      this.viewService.jumpToSection(nextViewElement.nativeElement.id);

      this.viewService.currentViewIndex++;
    }

  }

  scrollUpProcedure() {
    let previousViewElement = this.viewElements[this.viewService.currentViewIndex - 1]
    const boundingRect = previousViewElement.nativeElement.getBoundingClientRect()

    if (boundingRect.bottom >= (window.innerHeight * 0.99)) {

      this.viewService.jumpToSection(previousViewElement.nativeElement.id);

      this.viewService.currentViewIndex--;

    }

  }

  notAtBottomEnd() {
    return (this.viewService.currentViewIndex < this.viewElements.length - 1);
  }

  notAtTopStart() {
    return (this.viewService.currentViewIndex > 0);
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

    this.viewService.showNavOverlay.subscribe((value) => {
      this.showNavOverlay = value;
    })
  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.contentDivElements.changes
      .subscribe((elements: QueryList<any>) => {
        this.viewElements = elements.toArray();
      })
  };
}

