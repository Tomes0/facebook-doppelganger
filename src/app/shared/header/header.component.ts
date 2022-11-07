import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthComponent } from 'src/app/modules/pages/auth/auth.component';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$ = this.authService.user$;

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private router: Router) { }

  onAuth(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    const dialogRef = this.dialog.open(AuthComponent, dialogConfig);
  }

  onUserProfile(){
    this.router.navigate(['/myprofile'])
  }

  logout(){
    this.authService.logout();
    let currentUrl:string = this.router.url;
    this.router.navigate([currentUrl]);
  }

  ngOnInit(): void {
  }

}
