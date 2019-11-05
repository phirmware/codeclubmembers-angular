import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { ServerResponse } from '../models/server-response';
import { HttpErrorResponse } from '@angular/common/http';
import { EditService } from './edit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  username: string;
  role: string;
  display_image: string;
  status: string;
  profile: any;
  loading = true;

  constructor(private dashboardService: DashboardService, private service: EditService, private router: Router) {}

  ngOnInit() {
    this.dashboardService.getUserProfile().subscribe(
      (response: ServerResponse) => {
        this.profile = response;
        const { username, role, display_image, status } = this.profile;
        this.username = username;
        this.role = role;
        this.display_image = display_image;
        this.status = status;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  editProfile() {
    this.service
      .editProfile({ username: this.username, role: this.role, display_image: this.display_image, status: this.status })
      .subscribe(
        (response: ServerResponse) => {
          this.router.navigate(['/dashboard']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

  addProject(name: string, summary: string, project_url: string) {
    this.service.createProject({ name, summary, project_url }).subscribe(
      (response: ServerResponse) => {
        this.router.navigate(['/dashboard']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
