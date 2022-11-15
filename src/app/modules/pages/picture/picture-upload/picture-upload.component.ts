import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { PictureService } from 'src/app/core/services/picture.service';
import { PostService } from 'src/app/core/services/post.service';
import { UserService } from 'src/app/core/services/user.service';
import { CreatePostComponent } from '../../post/create-post/create-post.component';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css']
})
export class PictureUploadComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreatePostComponent>,
    private postService: PostService,
    private authService: AuthService,
    private userService: UserService,
    private pictureService: PictureService
  ) {}

  @ViewChild('fileUpload') file: ElementRef;

  form: FormGroup;
  picture: File = null;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.form = new FormGroup({
      'picture': new FormControl(this.picture, Validators.required),
    })
  }
  onCancel(){
    this.dialogRef.close()
  }

  onSubmit(){
    if(this.form.value['picture']){
      this.pictureService.save(this.file.nativeElement.files[0],
        this.authService.loggedInUser$.getValue().userId);
    }
    this.dialogRef.close()
  }

}
