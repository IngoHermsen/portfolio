import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  introFinished: Subject<boolean> = new Subject;

  constructor() { }

}
