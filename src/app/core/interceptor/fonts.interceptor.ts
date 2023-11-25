import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ViewService } from '../services/view.service';

@Injectable()
export class FontsInterceptor implements HttpInterceptor {
  requestedFonts: number = 0;

  constructor(private viewService: ViewService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {    
    
    if (request.url.endsWith('.woff2')) {
      this.requestedFonts++;

      return next.handle(request).pipe(
        tap(e => {
          if (e instanceof HttpResponse) {            
            this.requestedFonts--;

            this.viewService.fontsLoaded = (this.requestedFonts === 0);
          }
        })
      );
    } else {     
      console.log('ELSE');
       
      return next.handle(request);
    }
  }
}
