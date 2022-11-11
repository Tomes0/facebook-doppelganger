import { Picture } from "./picture.model";
import { User } from "./user.model";

export class Post{
  constructor(
    public postId: number,
    public content: string,
    public creationDate: Date,
    public title: string,
    public lastModificationDate: Date,
    public ownerId: number,
    public ownerObject: User,
    ){}
}
