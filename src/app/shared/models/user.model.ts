import { Picture } from "./picture.model";
import { Post } from "./post.model";

export class User{
  constructor(
    public email: string,
    public fullName: string,
    public creationDate: Date,
    public userName: string,
    public userId: number,
    public postList: Post[],
    public pictureList: Picture[]
    ){}
}
