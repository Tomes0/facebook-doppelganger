import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthComponent } from 'src/app/modules/pages/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public authService: AuthService) { }



  onAuth(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    const dialogRef = this.dialog.open(AuthComponent, dialogConfig);

    dialogRef.afterClosed().pipe( ).subscribe();

  }


  ngOnInit(): void {
  }

}
