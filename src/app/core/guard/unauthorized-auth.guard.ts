import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedAuthGuard implements CanActivate {

  loginStatus:string;
  constructor(public router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.loginStatus = localStorage.getItem("loggedIn");
      if(this.loginStatus != null || this.loginStatus != '' ) { 
          if(this.loginStatus == 'true'){
            this.router.navigate(['/app/home']);
          }
      return false;
    }

  }
  
}
