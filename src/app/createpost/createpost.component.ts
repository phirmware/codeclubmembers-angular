import { Component, OnInit } from '@angular/core';
import { CreatepostService } from './createpost.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatepostComponent implements OnInit {
  constructor(private service: CreatepostService) {}

  ngOnInit() {}

  createPost(title: string, summary: string, content: string) {
    if (!title || !summary || !content) {
      return;
    }
    this.service.createPost({ title, summary, content }).subscribe(
      response => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
