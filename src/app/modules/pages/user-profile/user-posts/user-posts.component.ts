import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';
import { UserService } from 'src/app/core/services/user.service';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { CreatePostComponent } from '../../post/create-post/create-post.component';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit, OnDestroy {
  user: User;
  posts: Post[];
  userSub: Subscription
  localFormat = formatDate;

  constructor(
    private postService: PostService,
    public authService: AuthService,
    public userService: UserService,
    private dialog: MatDialog,
    @Inject(LOCALE_ID) public locale: string

  ) { }

  ngOnInit(): void {
    this.userSub = this.userService.user$.subscribe(res =>
      {
        const sorted = res.postList.sort((a,b) =>{
          return a.creationDate.valueOf() < b.creationDate.valueOf()? 1 : -1
        })

        this.posts = sorted
      })
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }

  onEdit(post: Post){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = {
      title: post.title,
      content: post.content,
      id: post.postId
    }

    const dialogRef = this.dialog.open(CreatePostComponent, dialogConfig);
  }

  onDelete(post: Post){
    return this.postService.deletePost(post.postId).pipe(
      take(1)
      ).subscribe();
    }

}
