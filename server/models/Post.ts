import { Schema, model, Document } from 'mongoose';
import { IComment, commentSchema} from './Comment';

import { formatDate } from '../utils/dateFormat';

//interface for Post document
export interface IPost extends Document {
    postText: string;
    postAuthor: string;
    createdAt: Date;
    comments: IComment[];
}

//Post schema definition
const postSchema = new Schema<IPost>({
    postText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    postAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: Date) => formatDate(timestamp),
    } as any,
    comments: [commentSchema],
},
{
    toJSON: { getters: true },
    toObject: { getters: true }
});

//create and export the Post model
const Post = model<IPost>('Post', postSchema);

export default Post;