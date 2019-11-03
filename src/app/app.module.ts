import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { component: MembersComponent, path: 'members' },
  { component: SignupComponent, path: 'signup' },
  { component: LoginComponent, path: 'login' },
  { component: DashboardComponent, path: 'dashboard', canActivate: [AuthService] },
  { component: DetailsComponent, path: 'members/:username' },
];

@NgModule({
  declarations: [AppComponent, MembersComponent, SignupComponent, LoginComponent, DashboardComponent, DetailsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
