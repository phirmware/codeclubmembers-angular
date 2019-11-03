import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate {

  constructor(private service: AppService, private router: Router) { }

  canActivate() {
    if (this.service.isLoggedIn()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }

}
