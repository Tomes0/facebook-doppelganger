import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { Picture } from 'src/app/shared/models/picture.model';
import { AuthComponent } from '../../auth/auth.component';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  settingsForm: FormGroup;
  profilePictureForm: FormGroup;
  @ViewChild('fileUpload') file: ElementRef;

  hasPicture: boolean;
  userId: number = null;
  password: string = null;
  profilePicture: Picture = null;
  passwordToggle: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<AuthComponent>) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.userId = this.authService.loggedInUser$.getValue().userId;
    this.hasPicture = this.authService.loggedInUser$.getValue().profilePicture? true: false;

    this.settingsForm = new FormGroup({
      'password': new FormControl(this.password, Validators.required)
    });
    this.profilePictureForm = new FormGroup({
      'profilePicture': new FormControl(this.profilePicture, Validators.required)
    });

  }

  onSubmitPassword(){
    this.userService.updatePassword(this.userId, this.settingsForm.value['password']);
  }

  onSubmitProfilePicture(){
    this.userService.uploadProfilePicture(this.userId, this.file.nativeElement.files[0], this.hasPicture)
  }
  onDeleteProfile(){
    this.userService.delete(this.userId);
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  onTogglePassword(){

  }

  close() {
    this.dialogRef.close();
  }

}
