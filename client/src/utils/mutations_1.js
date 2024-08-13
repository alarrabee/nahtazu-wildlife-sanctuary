import { gql } from '@apollo/client';
import { DocumentNode } from '@apollo/client';

// Create a new user
export const ADD_USER: DocumentNode = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

// Log in a user
export const LOGIN_USER: DocumentNode = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        posts {
          _id
          postText
          createdAt
        }
      }
    }
  }
`;

// Create a post
export const CREATE_POST: DocumentNode = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      _id
      postText
      postAuthor {
        _id
        username
      }
      createdAt
    }
  }
`;

// Update a post
export const UPDATE_POST: DocumentNode = gql`
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      _id
      postText
      postAuthor {
        _id
        username
      }
      createdAt
    }
  }
`;

// Delete a post
export const DELETE_POST: DocumentNode = gql`
  mutation DeletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
      postText
      postAuthor {
        _id
        username
      }
      createdAt
    }
  }
`;