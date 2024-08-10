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
var AuthenticationError = require('apollo-server-express').AuthenticationError;
var signToken = require('../utils/auth').signToken;
var resolvers = {
    Query: {
        users: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        user: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var _id = _b._id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, User.findById(_id)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
        me: function (_, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (context.user) {
                    return [2 /*return*/, User.findById(context.user._id).populate('posts')];
                }
                throw new AuthenticationError('Not logged in');
            });
        }); },
        posts: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Post.find({}).populate('postAuthor')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
        post: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var _id = _b._id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Post.findById(_id).populate('postAuthor')];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
    },
    Mutation: {
        addUser: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
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
        removeUser: function (_, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!context.user) return [3 /*break*/, 2];
                        return [4 /*yield*/, User.findByIdAndDelete(context.user._id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: throw new AuthenticationError('Not logged in');
                }
            });
        }); },
        login: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
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
                        return [4 /*yield*/, User.findByIdAndUpdate(postAuthor, { $push: { posts: post._id } })];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, post.populate('postAuthor')];
                }
            });
        }); },
        updatePost: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var _id, postText;
            var input = _b.input;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _id = input._id, postText = input.postText;
                        return [4 /*yield*/, Post.findByIdAndUpdate(_id, { postText: postText }, { new: true }).populate('postAuthor')];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
        deletePost: function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
            var post;
            var _id = _b._id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Post.findByIdAndDelete(_id)];
                    case 1:
                        post = _c.sent();
                        return [4 /*yield*/, User.findByIdAndUpdate(post.postAuthor, { $pull: { posts: _id } })];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, post];
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
        postAuthor: function (post) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User.findById(post.postAuthor)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); },
    },
};
exports.default = resolvers;
