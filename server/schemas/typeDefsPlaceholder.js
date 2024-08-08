const typeDefs = `
    type User {
    id: ID!
    username: String!
    email: String!
    posts: [Post] # A list of posts by the user
    }

    type Post {
    id: ID!
    postText: String!
    postAuthor: User! # Reference to the user who authored the post
    createdAt: String! # Formatted date as a string
    comments: [Comment] # A list of comments on the post
    }

    type Comment {
    id: ID!
    commentText: String!
    commentAuthor: User! # Reference to the user who authored the comment
    createdAt: String! # Formatted date as a string
    }

    input CreatePostInput {
    postText: String!
    postAuthor: ID! # User ID of the author
    }

    input UpdatePostInput {
    id: ID!
    postText: String
    }

    input CreateCommentInput {
    commentText: String!
    commentAuthor: ID! # User ID of the comment author
    postId: ID! # ID of the post to comment on
    }

    input UpdateCommentInput {
    id: ID!
    commentText: String
    }

    type Query {
    users: [User] # Get a list of users
    user(id: ID!): User # Get a user by ID
    posts: [Post] # Get a list of posts
    post(id: ID!): Post # Get a post by ID
    }

    type Mutation {
    createPost(input: CreatePostInput!): Post # Create a new post
    updatePost(input: UpdatePostInput!): Post # Update an existing post
    deletePost(id: ID!): Post # Delete an existing post
    
    createComment(input: CreateCommentInput!): Comment # Create a new comment
    updateComment(input: UpdateCommentInput!): Comment # Update an existing comment
    deleteComment(id: ID!): Comment # Delete an existing comment
    }
`

module.exports = typeDefs;