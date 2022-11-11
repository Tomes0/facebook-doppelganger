import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
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

  _albums: any = [];

  constructor(private _lightbox: Lightbox) {}

  ngOnInit(): void {
    this.src = this.user.pictureList;
    this.src.forEach(pic => {
      this._albums.push(pic.bytea);
    })
  }

}
