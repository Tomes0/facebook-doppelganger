import { Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private pictureService: PictureService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    if(data){
      this.title = data.title;
      this.content = data.content;
      this.postId = data.id;
      this.editMode = false;
    }

  }


  form: FormGroup;
  title: string;
  content: string;
  postId: number;
  editMode: boolean;

  picture: File = null;

  ngOnInit(): void {
    this.initForm();

  }

  private initForm(){
    this.form = new FormGroup({
      'title': new FormControl(this.title, Validators.required),
      'content': new FormControl(this.content, Validators.required),
    })
    if(this.title == null){
      this.editMode = false;
    }else {
      this.editMode = true;
    }
  }
  onCancel(){
    this.dialogRef.close()
  }

  onSubmit(){
    if(this.editMode){
      this.postService.updatePost(this.postId, this.form.value['content'], this.form.value['title']).subscribe(
        x => this.postService.getAllPosts()
      );
    }else{
      this.postService.createPost(this.form.value['title'], this.form.value['content'], this.authService.loggedInUser$.getValue().userId).subscribe(
        x => this.postService.getAllPosts()
      );
    }
    this.dialogRef.close()
  }

}
