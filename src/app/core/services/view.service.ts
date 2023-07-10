import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  introFinished: Subject<boolean> = new Subject;

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  public jumpToSection(name: string) {
    this.router.navigate(['/main'], { fragment: name });
    this.scroller.scrollToAnchor(name);
  }


}
