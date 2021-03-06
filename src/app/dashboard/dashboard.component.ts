import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profile: any;
  projects: any;
  loading = true;
  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getUserProfile().subscribe(response => {
      this.loading = false;
      this.profile = response;
    });

    this.service.getUserProjects().subscribe(response => {
      this.projects = response;
    });
  }
}
