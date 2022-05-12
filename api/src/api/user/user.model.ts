import {Schema, model,Document} from 'mongoose';


interface IUserModel extends Document{
    key:string,
    user:string,
    image:string,
    email:string,
    contactNo:string,
    password:string,
    creditAmount:number,
    type:string
}
let schema: Schema = new Schema({
    key:String,
    user:String,
    image:String,
    email:String,
    contactNo:String,
    password:String,
    creditAmount:Number,
    type:String
});

export default model<IUserModel>('User', schema);