import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: User;
  userSub: Subscription

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userSub = this.userService.userObs$.subscribe(res => this.user = res)
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
