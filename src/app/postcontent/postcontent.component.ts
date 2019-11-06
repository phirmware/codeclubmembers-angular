import { Component, OnInit } from '@angular/core';
import { PostcontentService } from './postcontent.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-postcontent',
  templateUrl: './postcontent.component.html',
  styleUrls: ['./postcontent.component.css'],
})
export class PostcontentComponent implements OnInit {
  id: string;
  post: any;

  constructor(private service: PostcontentService, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getPost(this.id).subscribe(
      response => {
        this.post = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  likePost() {
    this.service.likePost(this.id).subscribe(
      response => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
