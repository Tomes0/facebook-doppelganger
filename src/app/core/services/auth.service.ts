import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, take, tap } from 'rxjs/operators'
import { User } from 'src/app/shared/models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  environment = environment

  loggedInUser$ = new BehaviorSubject<User>(null);
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  login(email: string, password: string){
    return this.http.post<User>(this.environment.backendUrl + '/api/auth/login',
    {
      email:email,
      password:password
    }).pipe(
      map(resData => {
        if(resData != null){
          this.isLoggedIn$.next(true);
          this.loggedInUser$.next(resData);
        }else {
          this.isLoggedIn$.next(false);
          this.loggedInUser$.next(null);
          alert('Incorrect email/password!')
          }
      }),
      take(1)
    ).subscribe();
  }

  register(request:{email: string, password: string, fullName: string, userName: string}){
    return this.http.post(this.environment.backendUrl + '/api/auth/register',
    {
      email:request.email,
      password:request.password,
      fullName:request.fullName,
      userName:request.userName
    }).pipe(
      take(1)
    ).subscribe();
  }

  logout(){
    this.isLoggedIn$.next(false);
    this.loggedInUser$.next(null);
  }


  constructor(
    private http: HttpClient,
    ) { }
}
