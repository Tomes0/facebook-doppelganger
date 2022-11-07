export class Picture{
  constructor(
    public pictureId: number,
    public bytea: Uint8Array[],
    public extension: string,
    public ownerId: number
    ){}
}
