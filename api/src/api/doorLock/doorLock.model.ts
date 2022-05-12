import {Schema, model,Document} from 'mongoose';


interface IDoorLockModel extends Document{
    doorId:string,
    keys:number[]
}
let schema: Schema = new Schema({
    doorId: String,
    keys: [String]
});

export default model<IDoorLockModel>('DoorLock', schema);