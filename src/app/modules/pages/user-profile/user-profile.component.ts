import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
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
export class UserProfileComponent implements OnInit {
  user: User;


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
  }
}
