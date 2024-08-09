"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../models'), User = _a.User, Post = _a.Post, Comment = _a.Comment;
var Favorite = require('../models/Favorite').Favorite;
var AuthenticationError = require('apollo-server-express').AuthenticationError;
var signToken = require('../utils/auth').signToken;
var resolvers = {
    Query: {
        // users: async () => {
        //   return User.find().populate('favoriteExhibits');
        // },
        // user: async (parent, { userId }) => {
        //   return User.findById(userId).populate('favoriteExhibits');
        // },
        //gets all users
        users: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        //gets one user
        user: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User.findById(id)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
        //gets all posts
        posts: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Post.find({}).populate('postAuthor').populate('comments.commentAuthor')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        //gets one post
        post: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Post.findById(id).populate('postAuthor').populate('comments.commentAuthor')];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
        me: function (parent, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (context.user) {
                    return [2 /*return*/, User.findById(context.user._id).populate('favoriteExhibits')];
                }
                throw new AuthenticationError('Not logged in');
            });
        }); },
    },
    Mutation: {
        addUser: function (parent_1, _a) { return __awaiter(void 0, [parent_1, _a], void 0, function (parent, _b) {
            var user, token;
            var username = _b.username, email = _b.email, password = _b.password;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User.create({ username: username, email: email, password: password })];
                    case 1:
                        user = _c.sent();
                        token = signToken(user);
                        return [2 /*return*/, { token: token, user: user }];
                }
            });
        }); },
        login: function (parent_1, _a) { return __awaiter(void 0, [parent_1, _a], void 0, function (parent, _b) {
            var user, correctPw, token;
            var email = _b.email, password = _b.password;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User.findOne({ email: email })];
                    case 1:
                        user = _c.sent();
                        if (!user) {
                            throw new AuthenticationError('Incorrect credentials');
                        }
                        return [4 /*yield*/, user.isCorrectPassword(password)];
                    case 2:
                        correctPw = _c.sent();
                        if (!correctPw) {
                            throw new AuthenticationError('Incorrect credentials');
                        }
                        token = signToken(user);
                        return [2 /*return*/, { token: token, user: user }];
                }
            });
        }); },
        // addFavorite: async (parent, { userId, exhibitId, title, description, image, link }) => {
        //   return User.findByIdAndUpdate(
        //     userId,
        //     { $push: { favoriteExhibits: { exhibitId, title, description, image, link } } },
        //     { new: true, runValidators: true }
        //   ).populate('favoriteExhibits');
        // },
        // removeFavorite: async (parent, { userId, exhibitId }) => {
        //   return User.findByIdAndUpdate(
        //     userId,
        //     { $pull: { favoriteExhibits: { exhibitId } } },
        //     { new: true }
        //   ).populate('favoriteExhibits');
        // },
        removeUser: function (parent, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (context.user) {
                    return [2 /*return*/, User.findByIdAndDelete(context.user._id)];
                }
                throw new AuthenticationError('Not logged in');
            });
        }); },
        //creates, updates and deletes posts
        createPost: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var postText, postAuthor, post;
            var input = _b.input;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        postText = input.postText, postAuthor = input.postAuthor;
                        return [4 /*yield*/, Post.create({ postText: postText, postAuthor: postAuthor })];
                    case 1:
                        post = _c.sent();
                        //adds the post to the user's posts array
                        return [4 /*yield*/, User.findByIdAndUpdate(postAuthor, { $push: { posts: post._id } })];
                    case 2:
                        //adds the post to the user's posts array
                        _c.sent();
                        return [2 /*return*/, post.populate('postAuthor')];
                }
            });
        }); },
        updatePost: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var id, postText;
            var input = _b.input;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        id = input.id, postText = input.postText;
                        return [4 /*yield*/, Post.findByIdAndUpdate(id, { postText: postText }, { new: true }).populate('postAuthor')];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
        deletePost: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var post;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Post.findByIdAndDelete(id)];
                    case 1:
                        post = _c.sent();
                        //removes the post from the user's posts array
                        return [4 /*yield*/, User.findByIdAndUpdate(post.postAuthor, { $pull: { posts: id } })];
                    case 2:
                        //removes the post from the user's posts array
                        _c.sent();
                        return [2 /*return*/, post];
                }
            });
        }); },
        //create, updates and deletes comments
        createComment: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var commentText, commentAuthor, postId, comment, post;
            var input = _b.input;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        commentText = input.commentText, commentAuthor = input.commentAuthor, postId = input.postId;
                        comment = new Comment({ commentText: commentText, commentAuthor: commentAuthor });
                        return [4 /*yield*/, Post.findByIdAndUpdate(postId, { $push: { comments: comment } }, { new: true }).populate('comments.commentAuthor')];
                    case 1:
                        post = _c.sent();
                        return [2 /*return*/, comment];
                }
            });
        }); },
        updateComment: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var id, commentText;
            var input = _b.input;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        id = input.id, commentText = input.commentText;
                        return [4 /*yield*/, Comment.findByIdAndUpdate(id, { commentText: commentText }, { new: true })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
        deleteComment: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var comment;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Comment.findByIdAndDelete(id)];
                    case 1:
                        comment = _c.sent();
                        //removes the comment from the post's comments array
                        return [4 /*yield*/, Post.findOneAndUpdate({ 'comments._id': id }, { $pull: { comments: { _id: id } } })];
                    case 2:
                        //removes the comment from the post's comments array
                        _c.sent();
                        return [2 /*return*/, comment];
                }
            });
        }); },
    },
    //resolves nested fields
    //will dynamically fetch and include related Post data for a User and returns a list of posts that were authored by this user
    User: {
        posts: function (user) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Post.find({ postAuthor: user._id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
    },
    Post: {
        //receives a post object as its argument. The post object is the parent object that contains the postAuthor field.
        //it uses post.postAuthor, which stores the ID of the user who created the post, and fetches the corresponding User document from the database using User.findById.
        //the fetched User document is returned and populated as the postAuthor field in the query response.
        postAuthor: function (post) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.findById(post.postAuthor)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        //the post object that contains a comments array.
        //returns the comments array from the post object.
        //the array of Comment objects is returned as the comments field in the query response.
        comments: function (post) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, post.comments];
            });
        }); },
    },
    //receives a comment object as its argument. The comment object is the parent object that contains the commentAuthor field.
    //uses comment.commentAuthor, which stores the ID of the user who wrote the comment, and fetches the corresponding User document from the database using User.findById`
    //the fetched User document is returned and populated as the commentAuthor field in the query response.
    Comment: {
        commentAuthor: function (comment) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.findById(comment.commentAuthor)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
    },
};
exports.default = resolvers;
