"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Comment_1 = require("./Comment");
var dateFormat_1 = require("../utils/dateFormat");
//Post schema definition
var postSchema = new mongoose_1.Schema({
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
        get: function (timestamp) { return (0, dateFormat_1.formatDate)(timestamp); },
    },
    comments: [Comment_1.commentSchema],
}, {
    toJSON: { getters: true },
    toObject: { getters: true }
});
//create and export the Post model
var Post = (0, mongoose_1.model)('Post', postSchema);
exports.default = Post;
