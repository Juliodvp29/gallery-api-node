import {model, Document, Schema} from 'mongoose';

const AlbumSchema = new Schema({
    name: {type: String, required: true},
    id: {type: String, required: true},
    list: {type: Array, required: false, default: []},
    createdAt: {type: Date, default: Date.now}
});

interface Album extends Document {
    name: string;
    id: string;
    list: string[];
    createdAt: Date;
}

export default model<Album>('Album', AlbumSchema);