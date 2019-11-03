import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  signUp(credentials) {
    return this.http.post(`${this.url}/signup`, credentials);
  }
}
