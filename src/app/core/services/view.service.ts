import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService implements AfterViewInit {
  currentViewIndex = 0;
  introFinished: Subject<boolean> = new Subject;
  activeSection: Subject<string> = new Subject;
  showNavOverlay: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(

    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngAfterViewInit(): void {

  }

  public jumpToSection(name: string, viewIndex?: number, closeOverlay?: string) {
    this.router.navigate(['/main'], { fragment: name });
    this.activeSection.next(name);
    this.scroller.scrollToAnchor(name);

    this.currentViewIndex = viewIndex ? viewIndex : this.currentViewIndex;
    
    if (closeOverlay == 'closeOverlay') {
      this.toggleOverlayMenu(false);
    }
  }


  toggleOverlayMenu(value?: boolean) {
    const navOverlayIsOpened: boolean = this.showNavOverlay.getValue();
    const bodyTag = document.getElementsByTagName('body')[0];
    
    this.showNavOverlay.next(value || !navOverlayIsOpened)

    if(!navOverlayIsOpened) {      
      bodyTag.classList.add('hide-overflow-y');
    } else {
      bodyTag.classList.remove('hide-overflow-y')
    }

  }
}
