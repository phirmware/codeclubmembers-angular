import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostcontentService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getPost(id: string) {
    return this.http.get(`${this.url}/post/${id}`);
  }

  likePost(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(`${this.url}/api/post/like/${id}`, null, httpOptions);
  }
}
