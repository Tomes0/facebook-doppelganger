import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  environment = environment


  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.environment.backendUrl + '/api/user/get/' + id)
  }




  constructor(
    private http: HttpClient
  ) { }
}
