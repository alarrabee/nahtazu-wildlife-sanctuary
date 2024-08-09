const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Favorite {
    exhibitId: ID!
    title: String
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    favoriteExhibits: [Favorite]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(userId: ID!, exhibitId: ID!, title: String, description: String, image: String, link: String): User
    removeFavorite(userId: ID!, exhibitId: ID!): User
    removeUser: User
  }
`;

module.exports = typeDefs;
