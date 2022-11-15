import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/modules/auth.module';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CorsInterceptor } from './core/services/cors-header-interceptor.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HomeModule } from './modules/modules/home.module';
import { PostService } from './core/services/post.service';
import { UserProfileModule } from './modules/modules/user-profile.module';
import { SharedModule } from './modules/modules/shared.module';
import { CreatePostModule } from './modules/modules/create-post.module';
import { PictureUploadComponent } from './modules/pages/picture/picture-upload/picture-upload.component';
import { UserEditComponent } from './modules/pages/user-profile/user-details/user-edit/user-edit.component';
import { UserSettingsComponent } from './modules/pages/user-profile/user-settings/user-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PictureUploadComponent,
    UserEditComponent,
    UserSettingsComponent,
  ],
  imports: [
    AuthModule,
    HomeModule,
    UserProfileModule,
    MatDialogModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CreatePostModule

  ],
  providers: [
    PostService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
