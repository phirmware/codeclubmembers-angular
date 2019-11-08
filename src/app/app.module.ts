import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AuthService } from './auth.service';
import { EditComponent } from './edit/edit.component';
import { LoadingComponent } from './loading/loading.component';
import { CommunityComponent } from './community/community.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { PostcontentComponent } from './postcontent/postcontent.component';

const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { component: MembersComponent, path: 'members' },
  { component: SignupComponent, path: 'signup' },
  { component: LoginComponent, path: 'login' },
  { component: DashboardComponent, path: 'dashboard', canActivate: [AuthService] },
  { component: EditComponent, path: 'edit', canActivate: [AuthService] },
  { component: DetailsComponent, path: 'members/:username' },
  { component: CommunityComponent, path: 'community' },
  { component: PostcontentComponent, path: 'post/:id' },
  { component: CreatepostComponent, path: 'createpost', canActivate: [AuthService] }
];

@NgModule({
  declarations: [AppComponent, MembersComponent, SignupComponent, LoginComponent,
     DashboardComponent, DetailsComponent, EditComponent, LoadingComponent, CommunityComponent, CreatepostComponent, PostcontentComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule, CKEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
