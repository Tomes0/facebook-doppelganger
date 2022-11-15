import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { Picture } from 'src/app/shared/models/picture.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthComponent } from '../../auth/auth.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  profilePicture: string;
  id: number;

  @Input() user: User
  picture: Picture = null;
  path:string;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  onEdit(user: User){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.data = {
      userId: user.userId,
      userName: user.userName,
      fullName: user.fullName,
      email: user.email,
      creationDate: user.creationDate,
    }

    const dialogRef = this.dialog.open(UserEditComponent, dialogConfig);
  }


  ngOnInit(): void {

    if(this.user.profilePicture){
      this.profilePicture =  this.user.profilePicture;
    }
    if(this.user.profilePicture == null) {
      this.profilePicture = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png';
    }

  }

}
