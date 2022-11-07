import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { PostComponent } from '../pages/post/post.component';
import { SharedModule } from './shared.module';



@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class UserProfileModule { }
