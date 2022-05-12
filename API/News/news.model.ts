import {Schema, model,Document} from 'mongoose';


interface INewsModel extends Document{
    key:number,
    likes:string,
    imagepath:string,
    title:string,
    caption:string,
    date:number,
    month:string,
    organizer:string
}
let schema: Schema = new Schema({
    key:Number,
    likes:String,
    imagepath:String,
    title:String,
    caption:String,
    date:Number,
    month:String,
    organizer:String
});

export default model<INewsModel>('News', schema);