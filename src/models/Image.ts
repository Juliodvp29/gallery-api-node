import {model, Document, Schema} from 'mongoose';

const ImageSchema = new Schema({
    name: {type: String, required: true},
    albumId: {type: String, required: false},
    path: {type: String, required: true},
    author: {type: String, required: false},
    createdAt: {type: Date, default: Date.now}
});

interface Image extends Document {
    name: string;
    albumId: string;
    path: string;
    author: string;
    createdAt: Date;
}

export default model<Image>('Image', ImageSchema);