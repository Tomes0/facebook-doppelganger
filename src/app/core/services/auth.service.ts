import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators'
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  environment = environment

  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  user$ = new BehaviorSubject<User>(null);

  login(email: string, password: string){
    return this.http.post<User>(this.environment.backendUrl + '/api/auth/login',
    {
      email:email,
      password:password
    }).pipe(
      map(resData => {
        if(resData != null){
          this.isLoggedIn$.next(true);
          this.user$.next(resData);
        }
          else {
            this.isLoggedIn$.next(false);
            this.user$.next(null);
          }


      })
    );
  }

  register(email: string, password: string, fullName: string, username: string){
    return this.http.post(this.environment.backendUrl + '/api/auth/register',
    {
      email:email,
      password:password,
      fullName:fullName,
      username:username
    }
    );
  }

  logout(){
    this.isLoggedIn$.next(false);
    this.user$.next(null);
  }


  constructor(private http: HttpClient) { }
}
