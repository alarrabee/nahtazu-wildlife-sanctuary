import { Schema, Document } from 'mongoose';
import { formatDate } from '../utils/dateFormat';

//interface for Comment subdocument
export interface IComment extends Document {
  commentText: string;
  commentAuthor: Schema.Types.ObjectId;
  createdAt: Date;
}

//Comment schema definition
export const commentSchema = new Schema<IComment>({
  commentText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  commentAuthor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp: Date) => formatDate(timestamp),
  } as any,
});