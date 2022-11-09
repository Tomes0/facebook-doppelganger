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

    console.log(picture)
    let reader = new FileReader();
    reader.readAsDataURL(picture);

    return this.http.post(this.environment.backendUrl + '/api/picture/save/' + id,
    {
      extension: picture.type,
      picture: reader.result
    })

  }

}
