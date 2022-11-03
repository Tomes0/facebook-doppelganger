import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { AuthComponent } from "../pages/auth/auth.component";

const routes: Routes=[
  { path: '', component: AuthComponent }
]

@NgModule({
  declarations: [AuthComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [AuthComponent],
  bootstrap: [AppComponent]
})
export class AuthModule {}
