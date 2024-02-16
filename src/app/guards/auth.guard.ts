import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private cookieValue: string;

  constructor(private cookieService: CookieService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.cookieValue = this.cookieService.get('CookieRole');
    if(this.cookieValue == ""){
      return false;
    }
    return true;
  }

  isConnected(){
    this.cookieValue = this.cookieService.get('CookieRole');
    if(this.cookieValue == "U"){
      return true;
    }
    return false;
  }

}
