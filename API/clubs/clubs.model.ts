import {Schema, model,Document} from 'mongoose';


interface IClubsModel extends Document{
    clubId:string,
    members:number,
    imagepath:string,
    clubname:string,
    description:string,

}
let schema: Schema = new Schema({
    clubId:String,
    members:Number,
    imagepath:String,
    clubname:String,
    description:String,
});

export default model<IClubsModel>('Clubs', schema);