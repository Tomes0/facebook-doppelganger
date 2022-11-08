import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { AuthComponent } from "../pages/auth/auth.component";
import { CreatePostComponent } from "../pages/post/create-post/create-post.component";
import { SharedModule } from "./shared.module";

const routes: Routes=[
  { path: '', component: CreatePostComponent }
]

@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class CreatePostModule {}
