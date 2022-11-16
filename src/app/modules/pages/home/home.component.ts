import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  posts$ = this.postService.getAllPosts();

  constructor(private postService: PostService) { }


  ngOnInit(): void {
  }

}
