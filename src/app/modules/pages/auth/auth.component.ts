import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  loginMode:boolean;

  email = '';
  userName = '';
  password = '';
  fullName = '';

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<AuthComponent>
  ) {

  }

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
    }else{
      this.authService.register(this.authForm.value['email'], this.authForm.value['password'], this.authForm.value['fullName'], this.authForm.value['userName']);
      this.onSwitchMode();
    }
  }

  close() {
    this.dialogRef.close();
}

}
