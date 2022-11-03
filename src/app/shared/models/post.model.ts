export class Post{
  constructor(
    public postId: Number,
    public content: string,
    public creationDate: string,
    public title: string,
    public lastModificationDate: string,
    public ownerId: Number,
    public ownerUser: String
    ){}
}
