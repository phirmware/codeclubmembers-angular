import { Component, OnInit } from '@angular/core';
import { CommunityService } from './community.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent implements OnInit {

  posts: any;

  constructor(private service: CommunityService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response;
        this.posts = this.posts.reverse();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
