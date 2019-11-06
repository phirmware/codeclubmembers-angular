import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.url}/posts`);
  }
}
