import { Component, Input, OnInit } from '@angular/core';
import { Picture } from 'src/app/shared/models/picture.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;
  picture: Picture[]
  path

  constructor() { }

  ngOnInit(): void {
    this.picture = this.user.pictureList;
    this.path = 'data:image/jpeg;base64,'+ this.picture[0].bytea
  }

}
