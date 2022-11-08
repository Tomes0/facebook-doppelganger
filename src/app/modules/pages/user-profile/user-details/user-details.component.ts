import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  imageUrl
  constructor(
    private _sanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {

  }
}
