import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerResponse } from '../models/server-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: LoginService, private router: Router) {}

  ngOnInit() {}

  login(e, username: string, password: string) {
    e.preventDefault();
    this.service.login({ username, password }).subscribe(
      (response: ServerResponse) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      (errorMessage: HttpErrorResponse) => {
        const {
          error: { message },
        } = errorMessage;
        console.log(message);
      }
    );
  }
}
