import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getAllMembers() {
    return this.http.get(`${this.url}/members`);
  }

  star(id: string) {
    return this.http.post(`${this.url}/star/${id}`, null);
  }
}
