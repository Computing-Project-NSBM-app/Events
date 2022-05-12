import { Schema, model ,Document} from 'mongoose';

interface IExampleModel extends Document {
    title:string,
    subtitle:string
}

let schema: Schema = new Schema({
    title: String,
    subtitle: String
});

export default model<IExampleModel>('Example', schema);