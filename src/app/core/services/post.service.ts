import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  environment = environment
  public posts$!: Observable<Post[]>;

  constructor(private http: HttpClient)  { }

  getAllPosts(){
    return this.http.get<Post[]>(this.environment.backendUrl + '/api/post/get-all').pipe(
      shareReplay(),
      map(result => {
        return result.sort((a,b) => {
          return a.creationDate > b.creationDate ? -1 : 1;
          })
      })
    )
  }

  createPost(title: string, content: string, userId: number, picture?: File){
    return this.http.post(this.environment.backendUrl + '/api/post/save/' + userId,
      {
        title:title,
        content:content,
      })
  }






}
