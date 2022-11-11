import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { PictureService } from 'src/app/core/services/picture.service';
import { PostService } from 'src/app/core/services/post.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreatePostComponent>,
    private postService: PostService,
    private authService: AuthService,
    private userService: UserService,
    private pictureService: PictureService
  ) {}

  @ViewChild('fileUpload') file: ElementRef;

  form: FormGroup;

  title = '';
  content = '';
  picture: File = null;


  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.form = new FormGroup({
      'title': new FormControl(this.title, Validators.required),
      'content': new FormControl(this.content, Validators.required),
      'picture': new FormControl(this.picture),
    })
  }
  onCancel(){
    this.dialogRef.close()
  }

  onSubmit(){
    this.postService.createPost(this.form.value['title'], this.form.value['content'], this.authService.loggedInUser$.getValue().userId).subscribe();
    if(this.form.value['picture']){
      this.pictureService.savePicture(this.file.nativeElement.files[0],
        this.authService.loggedInUser$.getValue().userId);
    }

    this.dialogRef.close()
  }

}
