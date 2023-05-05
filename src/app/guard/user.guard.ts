import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service"
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserGuard {

  constructor (private cookieService:CookieService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.cookieService.check("token")
      if(!cookie) {
        console.log("ME REDIRECCIONE AL LOGIN ")
        this.router.navigate(["login"])

        return false
      } 
    return true;
  }
  



}
