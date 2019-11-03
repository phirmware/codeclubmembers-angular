import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  viewProfile(username: string) {
    return this.http.get(`${this.url}/members/${username}`);
  }

  viewProjects(id: string) {
    return this.http.get(`${this.url}/projects/${id}`);
  }

}
