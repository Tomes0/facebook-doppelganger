import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { HomeComponent } from "../pages/home/home.component";
import { PostComponent } from "../pages/post/post.component";


const routes: Routes=[
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    CommonModule,
  ],
  exports: [HomeComponent],
  bootstrap: [AppComponent]
})
export class HomeModule {}
