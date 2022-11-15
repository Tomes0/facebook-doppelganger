import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take, tap, Subject } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Picture } from 'src/app/shared/models/picture.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  environment = environment
  user$ = new BehaviorSubject<User>(null);

  resolverGet(id): Observable<User>{
    return this.http.get<User>(this.environment.backendUrl + '/api/user/get/' + id).pipe(
      take(1)
    )
  }

  get(id: number){
    return this.http.get<User>(this.environment.backendUrl + '/api/user/get/' + id).pipe(
      take(1)
    ).subscribe(
      res => {
        this.user$.next(res)
      }
    )
  }

  update(id: number, email: string, fullName: string, userName: string){
    this.http.put(this.environment.backendUrl + '/api/user/update/' + id,
      {
        email: email,
        userName: userName,
        fullName: fullName
      }).pipe(
        take(1),
      ).subscribe(x => {
        this.get(id)
      })
  }

  uploadProfilePicture(id: number, picture: File, hasPicture: boolean){
    let reader = new FileReader();
    reader.readAsDataURL(picture);

    let there=this;

    reader.onload = function() {
      return there.http.post(there.environment.backendUrl + '/api/user/profilePicture/' + id,{
        bytea: reader.result
      }).pipe(
        take(1),
        tap(
          there.get(id)
        )
      ).subscribe()
    }
  }

  updatePassword(id: number, passoword: string){
    return this.http.put(this.environment.backendUrl + '/api/user/updatePassword/' + id,
      {
        passoword: passoword,
      }).pipe(
        take(1),
        tap(
          this.get(id)
        )
      ).subscribe();
  }

  delete(id: number){
    this.http.delete(this.environment.backendUrl + '/api/user/delete/' + id).pipe(
      take(1),
    ).subscribe();
  }

  constructor(
    private http: HttpClient,
  ) { }
}
