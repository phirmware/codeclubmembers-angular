import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router';
import { AppService } from './app.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate {

  helper = new JwtHelperService();

  constructor(private service: AppService, private router: Router) { }

  canActivate() {
    if (this.service.isLoggedIn()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    const isTokenExpired = this.helper.isTokenExpired(token);
    return !isTokenExpired;
  }

}
