import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { AuthComponent } from "../pages/auth/auth.component";
import { SharedModule } from "./shared.module";

const routes: Routes=[
  { path: '', component: AuthComponent }
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [AuthComponent],
  bootstrap: [AppComponent]
})
export class AuthModule {}
