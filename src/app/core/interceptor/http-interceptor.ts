import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor  implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders:{
        "Content-Type" : 'application/json'
      }
    });
    return next.handle(req)
  }
}

@Injectable()
export class HttpConfigErrorInterceptor  implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if(err.status === 401){
        localStorage.clear();
        this.router.navigate(['/login'])
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}