import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { CreatePostComponent } from '../../post/create-post/create-post.component';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input() user: User;
  posts: Post[]
  localFormat = formatDate;

  constructor(
    private postService: PostService,
    public authService: AuthService,
    private dialog: MatDialog,
    @Inject(LOCALE_ID) public locale: string

  ) { }

  ngOnInit(): void {
    const sorted = this.user.postList.sort((a,b) =>{
      return a.creationDate.valueOf() < b.creationDate.valueOf()? 1 : -1
    })
    this.posts = sorted;
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