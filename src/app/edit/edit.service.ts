import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  editProfile(credentials: {username: string, role: string, display_image: string, status: string}) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(`${this.url}/api/user/profile`, credentials, httpOptions);
  }

  createProject(credentials: {name: string, summary: string, project_url: string}) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(`${this.url}/api/project`, credentials, httpOptions);
  }

}
