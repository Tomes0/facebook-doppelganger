import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { PostComponent } from '../pages/post/post.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PostComponent,
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
