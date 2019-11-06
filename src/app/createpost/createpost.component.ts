import { Component, OnInit } from '@angular/core';
import { CreatepostService } from './createpost.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServerResponse } from '../models/server-response';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatepostComponent implements OnInit {
  constructor(private service: CreatepostService, private router: Router) {}

  ngOnInit() {}

  createPost(title: string, summary: string, content: string) {
    if (!title || !summary || !content) {
      return;
    }
    this.service.createPost({ title, summary, content }).subscribe(
      (response: ServerResponse) => {
        console.log(response);
        this.router.navigate([`/post/${response._id}`]);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
