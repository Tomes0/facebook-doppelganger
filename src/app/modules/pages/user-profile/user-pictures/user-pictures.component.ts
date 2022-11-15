import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { PictureService } from 'src/app/core/services/picture.service';
import { PostService } from 'src/app/core/services/post.service';

import { Picture } from 'src/app/shared/models/picture.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-pictures',
  templateUrl: './user-pictures.component.html',
  styleUrls: ['./user-pictures.component.css']
})
export class UserPicturesComponent implements OnInit {
  @Input() user: User;
  src: Picture[];
  isOwner: boolean = false;

  _albums: any = [];

  constructor(
    private pictureService: PictureService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if(this.user.userId == this.authService.loggedInUser$.getValue().userId){
      this.isOwner = true;
    }
    this.src = this.user.pictureList;
    this.src.forEach(pic => {
      this._albums.push(pic.bytea);
    })
  }

  onDelete(id: number){
    this.pictureService.delete(id)
  }

}
