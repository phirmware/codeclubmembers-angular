import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = environment.url;
  token: string;
  constructor(private http: HttpClient) {}

  getUserProfile() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get(`${this.url}/api/user/profile`, httpOptions);
  }

  getUserProjects() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get(`${this.url}/api/project`, httpOptions);
  }
}
