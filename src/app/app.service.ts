import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  helper = new JwtHelperService();

  constructor() { }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      const isTokenExpired = this.helper.isTokenExpired(token);
      if (isTokenExpired === true) {
        localStorage.removeItem('token');
      }
      return !isTokenExpired;
    }
    return false;
  }

}
