// const { gql } = require('apollo-server-express');

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post]           # A list of posts by the user
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID!
    postText: String!
    postAuthor: User!           # Reference to the user who authored the post
    createdAt: String!          # Formatted date as a string
    }

	input CreatePostInput {
		postText: String!
		postAuthor: ID!         # User ID of the author
	}

    input UpdatePostInput {
    _id: ID!
    postText: String
    }
        
    type Query {
			me: User
			users: [User]           # Get a list of users
			user(_id: ID!): User     # Get a user by ID

			posts: [Post]           # Get a list of posts
			post(_id: ID!): Post     # Get a post by ID
	}

    type Mutation {
			addUser(username: String!, email: String!, password: String!): Auth
			login(email: String!, password: String!): Auth
			removeUser: User

			createPost(input: CreatePostInput!): Post       # Create a new post
			updatePost(input: UpdatePostInput!): Post       # Update an existing post
			deletePost(_id: ID!): Post                       # Delete an existing post
			
    }
`;

module.exports = typeDefs;
