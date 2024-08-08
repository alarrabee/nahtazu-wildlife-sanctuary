"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
var mongoose_1 = require("mongoose");
var dateFormat_1 = require("../utils/dateFormat");
//Comment schema definition
exports.commentSchema = new mongoose_1.Schema({
    commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    commentAuthor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (timestamp) { return (0, dateFormat_1.formatDate)(timestamp); },
    },
});
