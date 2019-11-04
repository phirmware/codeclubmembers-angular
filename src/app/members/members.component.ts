import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerResponse } from '../models/server-response';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members: any;
  loading = true;
  constructor(private service: MembersService) {}

  ngOnInit() {
    this.service.getAllMembers().subscribe(
      (response: ServerResponse) => {
        this.loading = false;
        this.members = response.data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  starAUser(e, id: string) {
    console.log(e);
    e.target.classList.add('star');
    this.service.star(id).subscribe(
      (response: ServerResponse) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  bubble(e, id: string) {
    e.target.parentElement.classList.add('star');
    this.service.star(id).subscribe(
      (response: ServerResponse) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
