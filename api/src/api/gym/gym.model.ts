import {Schema, model,Document} from 'mongoose';


interface IGymModel extends Document{
    key:string,
    availableSpace:number,
    closingtime:string,
    openeningtime:string,
    numberallowed:number,
    lastentrytime:string,
}
let schema: Schema = new Schema({
    key:String,
    availableSpace:Number,
    closingtime:String,
    openeningtime:String,
    numberallowed:Number,
    lastentrytime:String,
});

export default model<IGymModel>('Gym', schema);