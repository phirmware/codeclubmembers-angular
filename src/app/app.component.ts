import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'codeclub-members';
  routerPath: any = '/members';
  helper = new JwtHelperService();

  ngOnInit() {
  }

  setRouterPath(e) {
    const sideNavs = document.querySelectorAll('.sidenav');
    for (let i = 0; i < sideNavs.length; i++) {
      sideNavs[i].classList.remove('mm-active');
    }
    e.target.classList.add('mm-active');
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    const isTokenExpired = this.helper.isTokenExpired(token);
    return !isTokenExpired;
  }

}
