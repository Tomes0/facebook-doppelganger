export class Post{
  constructor(
    public postId: number,
    public content: string,
    public creationDate: Date,
    public title: string,
    public lastModificationDate: Date,
    public ownerId: number,
    public ownerUser: string
    ){}
}
