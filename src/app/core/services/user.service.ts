import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Picture } from 'src/app/shared/models/picture.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  environment = environment

  get(id: number): Observable<User>{
    return this.http.get<User>(this.environment.backendUrl + '/api/user/get/' + id).pipe(
      take(1)
    )
  }

  update(id: number, email: string, fullName: string, userName: string){
    return this.http.put(this.environment.backendUrl + '/api/user/update/' + id,
      {
        email: email,
        userName: userName,
        fullName: fullName
      }).pipe(
        take(1)
      ).subscribe();
  }

  uploadProfilePicture(id: number, picture: File, hasPicture: boolean){
    let reader = new FileReader();
    reader.readAsDataURL(picture);

    let there=this;

    reader.onload = function() {
      return there.http.post(there.environment.backendUrl + '/api/user/profilePicture/' + id,{
        bytea: reader.result
      }).subscribe();

    }
  }

  updatePassword(id: number, passoword: string){
    return this.http.put(this.environment.backendUrl + '/api/user/updatePassword/' + id,
      {
        passoword: passoword,
      }).pipe(
        take(1)
      ).subscribe();
  }

  delete(id: number){
    this.http.delete(this.environment.backendUrl + '/api/user/delete/' + id).pipe(
      take(1)
    ).subscribe();
  }

  constructor(
    private http: HttpClient,
  ) { }
}
