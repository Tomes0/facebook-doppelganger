import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay, take, tap } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  environment = environment
  private posts = new BehaviorSubject<Post[]>(null)
  postsObs$ = this.posts.asObservable()

  constructor(
    private http: HttpClient,
    private userService: UserService
    )  { }

  getAllPosts(){
    return this.http.get<Post[]>(this.environment.backendUrl + '/api/post/get-all').pipe(
      shareReplay(),
      map(result => {
        const sorted = result.sort((a,b) =>{
          return a.creationDate.valueOf() < b.creationDate.valueOf()? 1 : -1
        })
        return sorted
      }),
      take(1))

  }

  createPost(title: string, content: string, userId: number){
    return this.http.post(this.environment.backendUrl + '/api/post/save/' + userId,
      {
        title:title,
        content:content,
      }).pipe(
        take(1),
        tap()
        )
        .subscribe(
          x=> {
            this.getAllPosts()
            this.userService.get(userId)
          }
        );
  }

  deletePost(postId: number){
    return this.http.delete(this.environment.backendUrl + '/api/post/delete/' + postId).pipe(
      take(1),
      ).subscribe();
  }

  updatePost(postId: number, content: string, title: string){
    return this.http.put(this.environment.backendUrl + '/api/post/update/'+ postId,
    {
      title:title,
      content:content,
    }).pipe(
      take(1),
      ).subscribe(
        x=> this.getAllPosts()
      );
  }




}
