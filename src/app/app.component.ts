import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'codeclub-members';
  routerPath: any = '/members';

  setRouterPath(e) {
    const sideNavs = document.querySelectorAll('.sidenav');
    for (let i = 0; i < sideNavs.length; i++) {
      sideNavs[i].classList.remove('mm-active');
    }
    e.target.classList.add('mm-active');
  }
}
