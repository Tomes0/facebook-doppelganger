import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  environment = environment

  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId$ = new BehaviorSubject<number>(-1);

  login(email: string, password: string){
    this.http.post<number>(this.environment.backendUrl + '/api/auth/login',
    {
      email:email,
      password:password
    }).pipe(
      map(resData => {
        if(resData != -1){
          this.isLoggedIn$.next(true);
          this.userId$.next(resData);
        }
          else {
            this.isLoggedIn$.next(false);
            this.userId$.next(-1);
          }

      })
    ).subscribe();
  }

  register(email: string, password: string, fullName: string, username: string){
    this.http.post(this.environment.backendUrl + '/api/auth/register',
    {
      email:email,
      password:password,
      fullName:fullName,
      username:username
    }).subscribe();
  }



  constructor(private http: HttpClient) { }
}
