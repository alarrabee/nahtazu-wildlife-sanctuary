const { User } = require('../models/User');
const { Favorite } = require('../models/Favorite');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('favoriteExhibits');
    },
    user: async (parent, { userId }) => {
      return User.findById(userId).populate('favoriteExhibits');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('favoriteExhibits');
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
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
    addFavorite: async (parent, { userId, exhibitId, title, description, image, link }) => {
      return User.findByIdAndUpdate(
        userId,
        { $push: { favoriteExhibits: { exhibitId, title, description, image, link } } },
        { new: true, runValidators: true }
      ).populate('favoriteExhibits');
    },
    removeFavorite: async (parent, { userId, exhibitId }) => {
      return User.findByIdAndUpdate(
        userId,
        { $pull: { favoriteExhibits: { exhibitId } } },
        { new: true }
      ).populate('favoriteExhibits');
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndDelete(context.user._id);
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;
