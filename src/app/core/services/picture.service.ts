import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, take, tap } from 'rxjs';
import { Picture } from 'src/app/shared/models/picture.model';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PictureService {

  environment = environment
  public pictures$!: Observable<Picture[]>;

  constructor(private http: HttpClient)  { }

  save(picture: File, id: number){
    let reader = new FileReader();
    reader.readAsDataURL(picture);

    let there=this;

    reader.onload = function() {
      there.http.post(there.environment.backendUrl + '/api/picture/save/' + id,
    {
      bytea: reader.result
    }).subscribe();
    }
  }

  delete(id: number){
    this.http.delete(this.environment.backendUrl + '/api/picture/delete/' + id).pipe(
      take(1)
    ).subscribe();
  }

}
