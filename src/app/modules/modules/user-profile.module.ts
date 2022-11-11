import { NgModule } from '@angular/core';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { SharedModule } from './shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../pages/user-profile/user-details/user-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UserPicturesComponent } from '../pages/user-profile/user-pictures/user-pictures.component';
import { UserPostsComponent } from '../pages/user-profile/user-posts/user-posts.component';
import { LightboxModule } from 'ngx-lightbox';
import { UserResolver } from 'src/app/core/resolver/user.resolver';


const routes: Routes=[
  { path: '', component: UserProfileComponent, resolve: {user: UserResolver}}
]

@NgModule({
  declarations: [
    UserProfileComponent,
    UserDetailsComponent,
    UserPicturesComponent,
    UserPostsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatTabsModule,
    LightboxModule
  ],
})
export class UserProfileModule { }
