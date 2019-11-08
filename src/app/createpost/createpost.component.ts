import { Component, OnInit } from '@angular/core';
import { CreatepostService } from './createpost.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServerResponse } from '../models/server-response';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatepostComponent implements OnInit {

  content: string;

  constructor(private service: CreatepostService, private router: Router) {}

  ngOnInit() {}

  public onChange(event: CKEditor4.EventInfo) {
    this.content = event.editor.getData();
  }

  createPost(title: string, summary: string) {
    if (!title || !summary || !this.content) {
      return;
    }
    this.service.createPost({ title, summary, content: this.content }).subscribe(
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
