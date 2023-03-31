import { Picture } from "./picture.model";
import { User } from "./user.model";

export interface Post{
  postId: number,
  content: string,
  creationDate: Date,
  title: string,
  lastModificationDate: Date,
  ownerId: number,
  ownerObject: User,
};
