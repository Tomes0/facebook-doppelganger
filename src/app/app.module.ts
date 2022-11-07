import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/modules/auth.module';
import { HomeComponent } from './modules/pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './modules/pages/post/post.component';
import { AuthInterceptorService } from './core/services/coor-header-interceptor.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UserProfileComponent } from './modules/pages/user-profile/user-profile.component';
import { HomeModule } from './modules/modules/home.module';
import { PostService } from './core/services/post.service';
import { UserProfileModule } from './modules/modules/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
