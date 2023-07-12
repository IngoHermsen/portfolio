import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService implements AfterViewInit {
  currentViewIndex = 0;
  introFinished: Subject<boolean> = new Subject;
  activeSection: Subject<string> = new Subject;

  constructor(
  
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    
  }

  public jumpToSection(name: string, viewIndex?: number) {
    this.router.navigate(['/main'], { fragment: name });
    this.activeSection.next(name);
    this.scroller.scrollToAnchor(name);
    
    this.currentViewIndex = viewIndex ? viewIndex : this.currentViewIndex;
    console.log(this.currentViewIndex);
    
  }

  


}
