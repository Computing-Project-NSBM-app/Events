import {Schema, model,Document} from 'mongoose';

interface IKey {
    id: string,
    nic: string,
    loginId:string,
    isMaster:boolean,
    name: string
}
interface IRoomModel extends Document{
    doorId:string,
    keys:IKey[],
    from: string,
    to:string,
    packages:string[]
}
let schema: Schema = new Schema({
    doorId: String,
    keys: [Object],
    from:[String],
    to:[String],
    packages:[String]
});

export default model<IRoomModel>('Room', schema);