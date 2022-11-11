import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Picture } from 'src/app/shared/models/picture.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  profilePicture: string;

  @Input() user: User
  picture: Picture = null;
  path:string;

  constructor() { }

  ngOnInit(): void {
    if(!!this.user.pictureList[0]){
      this.profilePicture =  this.user.pictureList[0].bytea;
    }else {
      this.profilePicture = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png';
    }

  }

}
