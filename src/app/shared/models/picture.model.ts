import { User } from "./user.model";

export class Picture{
  constructor(
    public pictureId: number,
    public bytea: String,
    public extension: string,
    public ownerId: number,
    public ownerObject?: User
    ){}
}
