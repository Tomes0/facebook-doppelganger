import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
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

  savePicture(picture: File, id: number){
    let reader = new FileReader();
    reader.readAsDataURL(picture);

    let there=this;

    reader.onload = function() {
      there.http.post(there.environment.backendUrl + '/api/picture/save/' + id,
    {
      extension: picture.type,
      bytea: reader.result
    }).subscribe();

    }




  }



}
