import {Schema, model,Document} from 'mongoose';


export interface IPaymentModel extends Document{
    key:string,
    payments:[{
        name:string,
        price:number,
        qty:number
    }]
}
const Payments = new Schema({ name: String,price:Number,qty:Number });
let schema: Schema = new Schema({
    key: String,
    payments: [Payments]
});

export default model<IPaymentModel>('Payment', schema);