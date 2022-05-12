import {Schema, model,Document} from 'mongoose';


interface IEventModel extends Document{
    key:string,
    participants:string,
    imagepath:string,
    title:string,
    caption:string,
    date:number,
    month:string,
    organizer:string
}
let schema: Schema = new Schema({
    key:String,
    participants:String,
    imagepath:String,
    title:String,
    caption:String,
    date:Number,
    month:String,
    organizer:String
});

export default model<IEventModel>('Event', schema);