// const { Profile } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');

// const resolvers = {
//   Query: {
//     profiles: async () => {
//       return Profile.find();
//     },

//     profile: async (parent, { profileId }) => {
//       return Profile.findOne({ _id: profileId });
//     },
//     // By adding context to our query, we can retrieve the logged in user without specifically searching for them
//     me: async (parent, args, context) => {
//       if (context.user) {
//         return Profile.findOne({ _id: context.user._id });
//       }
//       throw AuthenticationError;
//     },
//   },

//   Mutation: {
//     addProfile: async (parent, { name, email, password }) => {
//       const profile = await Profile.create({ name, email, password });
//       const token = signToken(profile);

//       return { token, profile };
//     },
//     login: async (parent, { email, password }) => {
//       const profile = await Profile.findOne({ email });

//       if (!profile) {
//         throw AuthenticationError;
//       }

//       const correctPw = await profile.isCorrectPassword(password);

//       if (!correctPw) {
//         throw AuthenticationError;
//       }

//       const token = signToken(profile);
//       return { token, profile };
//     },

//     // Add a third argument to the resolver to access data in our `context`
//     addSkill: async (parent, { profileId, skill }, context) => {
//       // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
//       if (context.user) {
//         return Profile.findOneAndUpdate(
//           { _id: profileId },
//           {
//             $addToSet: { skills: skill },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//       // If user attempts to execute this mutation and isn't logged in, throw an error
//       throw AuthenticationError;
//     },
//     // Set up mutation so a logged in user can only remove their profile and no one else's
//     removeProfile: async (parent, args, context) => {
//       if (context.user) {
//         return Profile.findOneAndDelete({ _id: context.user._id });
//       }
//       throw AuthenticationError;
//     },
//     // Make it so a logged in user can only remove a skill from their own profile
//     removeSkill: async (parent, { skill }, context) => {
//       if (context.user) {
//         return Profile.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { skills: skill } },
//           { new: true }
//         );
//       }
//       throw AuthenticationError;
//     },
//   },
// };

// module.exports = resolvers;




///*** */
// const { User, Post, Comment } = require('../models');
// // const { Favorite } = require('../models/Favorite');
// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');

// const resolvers = {
//   Query: {
//     // users: async () => {
//     //   return User.find().populate('favoriteExhibits');
//     // },
//     // user: async (parent, { userId }) => {
//     //   return User.findById(userId).populate('favoriteExhibits');
//     // },
// //gets all users
//     users: async () => {
//     return await User.find({});
//     },
//     //gets one user
//     user: async (_, { id }) => {
//     return await User.findById(id);
//     },
//     //gets all posts
//     posts: async () => {
//     return await Post.find({}).populate('postAuthor').populate('comments.commentAuthor');
//     },
//     //gets one post
//     post: async (_, { id }) => {
//     return await Post.findById(id).populate('postAuthor').populate('comments.commentAuthor');
//     },
//     me: async (parent, args, context) => {
//       if (context.user) {
//         return User.findById(context.user._id).populate('favoriteExhibits');
//       }
//       throw new AuthenticationError('Not logged in');
//     },
//   },
//   Mutation: {
//     addUser: async (parent, { username, email, password }) => {
//       const user = await User.create({ username, email, password });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });
//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }
//       const correctPw = await user.isCorrectPassword(password);
//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }
//       const token = signToken(user);
//       return { token, user };
//     },
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
//     removeUser: async (parent, args, context) => {
//       if (context.user) {
//         return User.findByIdAndDelete(context.user._id);
//       }
//       throw new AuthenticationError('Not logged in');
//     },
//         //creates, updates and deletes posts
//         createPost: async (_, { input }) => {
//             const { postText, postAuthor } = input;
//             const post = await Post.create({ postText, postAuthor });
      
//             //adds the post to the user's posts array
//             await User.findByIdAndUpdate(postAuthor, { $push: { posts: post._id } });
      
//             return post.populate('postAuthor');
//           },
//           updatePost: async (_, { input }) => {
//             const { id, postText } = input;
//             return await Post.findByIdAndUpdate(id, { postText }, { new: true }).populate('postAuthor');
//           },
//           deletePost: async (_, { id }) => {
//             const post = await Post.findByIdAndDelete(id);
            
//             //removes the post from the user's posts array
//             await User.findByIdAndUpdate(post.postAuthor, { $pull: { posts: id } });
      
//             return post;
//           },
//           //create, updates and deletes comments
//           createComment: async (_, { input }) => {
//             const { commentText, commentAuthor, postId } = input;
//             const comment = new Comment({ commentText, commentAuthor });
      
//             //adds the comment to the post
//             const post = await Post.findByIdAndUpdate(
//               postId,
//               { $push: { comments: comment } },
//               { new: true }
//             ).populate('comments.commentAuthor');
      
//             return comment;
//           },
//           updateComment: async (_, { input }) => {
//             const { id, commentText } = input;
//             return await Comment.findByIdAndUpdate(id, { commentText }, { new: true });
//           },
//           deleteComment: async (_, { id }) => {
//             const comment = await Comment.findByIdAndDelete(id);
      
//             //removes the comment from the post's comments array
//             await Post.findOneAndUpdate({ 'comments._id': id }, { $pull: { comments: { _id: id } } });
      
//             return comment;
//           },
//         },
//         //resolves nested fields
//         //will dynamically fetch and include related Post data for a User and returns a list of posts that were authored by this user
//         User: {
//           posts: async (user) => {
//             return await Post.find({ postAuthor: user._id });
//           },
//         },
//         Post: {
//           //receives a post object as its argument. The post object is the parent object that contains the postAuthor field.
//           //it uses post.postAuthor, which stores the ID of the user who created the post, and fetches the corresponding User document from the database using User.findById.
//           //the fetched User document is returned and populated as the postAuthor field in the query response.
//           postAuthor: async (post) => {
//             return await User.findById(post.postAuthor);
//           },
//           //the post object that contains a comments array.
//           //returns the comments array from the post object.
//           //the array of Comment objects is returned as the comments field in the query response.
//           comments: async (post) => {
//             return post.comments;
//           },
//         },
//         //receives a comment object as its argument. The comment object is the parent object that contains the commentAuthor field.
//         //uses comment.commentAuthor, which stores the ID of the user who wrote the comment, and fetches the corresponding User document from the database using User.findById`
//         //the fetched User document is returned and populated as the commentAuthor field in the query response.
//         Comment: {
//           commentAuthor: async (comment) => {
//             return await User.findById(comment.commentAuthor);
//           },
    
//   },
// };

// export default resolvers;
