import { Picture } from "./picture.model";
import { Post } from "./post.model";

export class User{
  constructor(
    public userId: number,
    public userName: string,
    public email: string,
    public fullName: string,
    public creationDate: Date,
    public postList?: Post[],
    public pictureList?: Picture[]
    ){}
}
