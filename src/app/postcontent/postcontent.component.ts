import { Component, OnInit } from '@angular/core';
import { PostcontentService } from './postcontent.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-postcontent',
  templateUrl: './postcontent.component.html',
  styleUrls: ['./postcontent.component.css'],
})
export class PostcontentComponent implements OnInit {
  id: string;
  post: any;
  helper = new JwtHelperService();
  token: string;
  loggedOnUserId: string;
  liked = false;
  numberOfLikes: number;

  constructor(private service: PostcontentService, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.loggedOnUserId = this.helper.decodeToken(this.token).id;
    }

    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getPost(this.id).subscribe(
      response => {
        this.post = response;
        this.numberOfLikes = this.post.number_of_likes;
        console.log(response);
        const userThatLikedIds = this.post.users_that_liked.map((item: { _id: any }) => {
          return item._id;
        });
        userThatLikedIds.forEach((x: string) => {
          if (x === this.loggedOnUserId) {
            this.liked = true;
          }
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  likePost() {
    this.numberOfLikes ++;
    this.liked = true;
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
