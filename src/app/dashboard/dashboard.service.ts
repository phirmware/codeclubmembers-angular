import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = environment.url;
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  getUserProfile() {
    return this.http.get(`${this.url}/api/user/profile`, this.httpOptions);
  }

  getUserProjects() {
    return this.http.get(`${this.url}/api/project`, this.httpOptions);
  }
}
