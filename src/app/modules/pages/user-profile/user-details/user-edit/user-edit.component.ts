import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { AuthComponent } from '../../../auth/auth.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  authForm: FormGroup;

  userId: number = null;
  email = '';
  userName = '';
  fullName = '';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      if(data){
        this.userId = data.userId;
        this.email = data.email;
        this.userName = data.userName;
        this.fullName = data.fullName;
      }
    }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.authForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'userName': new FormControl(this.userName, Validators.required),
      'fullName': new FormControl(this.fullName, Validators.required)
    })

  }

  onSubmit(){
    this.userService.update(this.userId, this.authForm.value['email'], this.authForm.value['fullName'], this.authForm.value['userName'], )
    this.close();
  }


  close() {
    this.dialogRef.close();
  }

}
