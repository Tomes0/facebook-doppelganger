import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/modules/auth.module';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './core/services/coor-header-interceptor.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HomeModule } from './modules/modules/home.module';
import { PostService } from './core/services/post.service';
import { UserProfileModule } from './modules/modules/user-profile.module';
import { CreatePostComponent } from './modules/pages/post/create-post/create-post.component';
import { SharedModule } from './modules/modules/shared.module';
import { CreatePostModule } from './modules/modules/create-post.module';
import { RoundButtonDirective } from './shared/directives/round-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoundButtonDirective,
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
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
