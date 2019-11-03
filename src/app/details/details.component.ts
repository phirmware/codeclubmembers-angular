import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { ServerResponse } from '../models/server-response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  username: string;
  profile: any;
  userId: string;
  projects: any;

  constructor(private route: ActivatedRoute, private service: DetailsService) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.service.viewProfile(this.username).subscribe((response: ServerResponse) => {
      this.profile = response;
      this.userId = this.profile._id;
      this.viewUsersProjects(this.userId);
    });
  }

  viewUsersProjects(id: string) {
    this.service.viewProjects(id).subscribe(
      (response: ServerResponse) => {
        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
