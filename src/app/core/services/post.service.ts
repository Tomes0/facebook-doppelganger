import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': '*'
  })

  environment = environment
  public posts$!: Observable<Post[]>;

  constructor(private http: HttpClient)  { }

  getAllPosts(){

    return this.http.get<Post[]>(this.environment.backendUrl + '/api/post/get-all').pipe(
      shareReplay()
    )
  }




}
