import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService implements AfterViewInit {
  introFinished: Subject<boolean> = new Subject;

  constructor(
  
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    
  }

  public jumpToSection(name: string) {
    this.router.navigate(['/main'], { fragment: name });
    this.scroller.scrollToAnchor(name);
  }




}
