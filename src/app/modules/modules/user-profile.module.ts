import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { PostComponent } from '../pages/post/post.component';
import { SharedModule } from './shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../pages/user-profile/user-details/user-details.component';

const routes: Routes=[
  { path: '', component: UserProfileComponent }
]

@NgModule({
  declarations: [
    UserProfileComponent,
    UserDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserProfileModule { }
