import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { ServerResponse } from '../models/server-response';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private service: SignupService, private router: Router) {}

  ngOnInit() {}

  validURL(str: string) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(str);
  }

  register(e, username: string, password: string, role: string, status: string, display_image: string) {
    e.preventDefault();
    if (!username || !password || !role || !status || !display_image) {
      return;
    }
    const urlValid = this.validURL(display_image);
    if (!urlValid) {
      return;
    }
    this.service.signUp({ username, password, role, status, display_image }).subscribe(
      (response: ServerResponse) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
