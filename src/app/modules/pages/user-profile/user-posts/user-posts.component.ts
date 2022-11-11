import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input() user: User;
  posts: Post[]



  constructor(
    private postService: PostService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.posts = this.user.postList;
  }

  onEdit(id){}

  onDelete(id){
    return this.postService.deletePost(id).pipe(
      take(1)
    ).subscribe();
  }

}
