import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreatePostComponent>,
    private postService: PostService,
    private authService: AuthService
  ) {}

  form: FormGroup;

  title = '';
  content = '';

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.form = new FormGroup({
      'title': new FormControl(this.title, Validators.required),
      'content': new FormControl(this.content, Validators.required)
    })
  }
  onCancel(){
    this.dialogRef.close()
  }

  onSubmit(){
    this.postService.createPost(this.form.value['title'], this.form.value['content'], this.authService.user$.getValue().userId).subscribe();
    this.dialogRef.close()
  }

}
