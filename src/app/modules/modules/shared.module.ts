import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { PostComponent } from '../pages/post/post.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PostComponent,
    CommonModule,
    MatCardModule
  ]
})
export class SharedModule { }
