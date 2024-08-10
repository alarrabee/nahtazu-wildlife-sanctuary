const { User, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (_, { _id }) => {
            return await User.findById(_id);
        },
        me: async (_, args, context) => {
            if (context.user) {
                return User.findById(context.user._id).populate('posts');
            }
            throw new AuthenticationError('Not logged in');
        },


        posts: async () => {
            return await Post.find({}).populate('postAuthor');
        },
        post: async (_, { _id }) => {
            return await Post.findById(_id).populate('postAuthor');
        },
    },


    Mutation: {
        addUser: async (_, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        removeUser: async (_, args, context) => {
            if (context.user) {
                return await User.findByIdAndDelete(context.user._id);
            }
            throw new AuthenticationError('Not logged in');
        },


        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },


        createPost: async (_, { input }) => {
            const { postText, postAuthor } = input;
            const post = await Post.create({ postText, postAuthor });
            await User.findByIdAndUpdate(postAuthor, { $push: { posts: post._id } });
            return post.populate('postAuthor');
        },
        updatePost: async (_, { input }) => {
            const { _id, postText } = input;
            return await Post.findByIdAndUpdate( _id, { postText }, { new: true }).populate('postAuthor');
        },
        deletePost: async (_, { _id }) => {
            const post = await Post.findByIdAndDelete(_id);
            await User.findByIdAndUpdate(post.postAuthor, { $pull: { posts: _id } });
            return post;
        },
    },
    //resolves nested fields
    //will dynamically fetch and include related Post data for a User and returns a list of posts that were authored by this user
    User: {
        posts: async (user) => {
        return await Post.find({ postAuthor: user._id });
        },
    },
    Post: {
        postAuthor: async (post) => {
        return await User.findById(post.postAuthor);
        },
    },
};

module.exports = resolvers;
