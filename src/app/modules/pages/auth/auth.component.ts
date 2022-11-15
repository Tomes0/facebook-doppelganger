import { AfterContentInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service'
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  loginMode:boolean;
  editMode: boolean;
  showPassword: boolean;

  email = '';
  userName = '';
  password = '';
  fullName = '';

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<AuthComponent>){}

  ngOnInit(): void {
    this.loginMode=true;
    this.changeLoadedForm();
  }

  private changeLoadedForm(){
    if(this.loginMode){
      this.authForm = new FormGroup({
        'email': new FormControl(this.email, [Validators.required, Validators.email]),
        'password': new FormControl(this.password, Validators.required)
      })
    }else{
      this.authForm = new FormGroup({
        'email': new FormControl(this.email, [Validators.required, Validators.email]),
        'password': new FormControl(this.password, Validators.required),
        'userName': new FormControl(this.userName, Validators.required),
        'fullName': new FormControl(this.fullName, Validators.required)
      })
    }
  }

  onSwitchMode(){
    this.loginMode = !this.loginMode;
    this.changeLoadedForm();
  }

  onSubmit(){
    if(this.loginMode){
      this.authService.login(this.authForm.value['email'], this.authForm.value['password']);
      this.dialogRef.close();
    }
    if(!this.loginMode){
      this.authService.register(this.authForm.value['email'], this.authForm.value['password'], this.authForm.value['fullName'], this.authForm.value['userName']);
      this.onSwitchMode();
    }
  }
  onTogglePassword(){
    this.showPassword = !this.showPassword
  }

  close() {
    this.dialogRef.close();
}

}
