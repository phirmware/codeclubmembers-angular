import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreatepostService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  createPost(credentials: { title: string; summary: string; content: string }) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(`${this.url}/api/post`, credentials, httpOptions);
  }
}
