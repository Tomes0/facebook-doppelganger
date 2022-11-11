import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, take, tap } from 'rxjs';
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
      }),
      take(1),
      shareReplay())
  }

  createPost(title: string, content: string, userId: number){
    return this.http.post(this.environment.backendUrl + '/api/post/save/' + userId,
      {
        title:title,
        content:content,
      }).pipe(take(1));
  }

  deletePost(postId: number){
    return this.http.delete(this.environment.backendUrl + '/api/post/delete/' + postId).pipe(take(1));
  }

  updatePost(postId: number, content: string, title: string){
    return this.http.put(this.environment.backendUrl + '/api/post/update/'+ postId,
    {
      title:title,
      content:content,
    }).pipe(take(1));
  }




}
