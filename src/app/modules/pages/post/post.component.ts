import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Post } from 'src/app/shared/models/post.model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  formatedDate;

  constructor(
    public authService: AuthService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {
    this.formatedDate = formatDate(this.post.lastModificationDate, "MMM d, y, h:mm:ss a", this.locale)
  }
}
