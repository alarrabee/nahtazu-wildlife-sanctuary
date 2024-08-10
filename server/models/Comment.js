const { Schema, model } = require('mongoose');
const formatDate = require('../utils/dateFormat');

// Define the comment schema
const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
    },
    commentAuthor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => formatDate(createdAtVal), // Assuming you have a formatDate function
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Export the Comment model
module.exports = model('Comment', commentSchema);
