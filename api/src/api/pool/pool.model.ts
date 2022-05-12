import {Schema, model,Document} from 'mongoose';


interface IPoolModel extends Document{
    key:string,
    availableSpace:number,
    closingtime:string,
    openeningtime:string,
    numberallowed:string,
    lastentrytime:string,
}
let schema: Schema = new Schema({
    key:String,
    availableSpace:Number,
    closingtime:String,
    openeningtime:String,
    numberallowed:String,
    lastentrytime:String,
});

export default model<IPoolModel>('Pool', schema);