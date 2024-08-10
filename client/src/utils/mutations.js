import { gql } from '@apollo/client';

//create a new user
export const ADD_USER = gql`
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

//log in a user
export const LOGIN_USER = gql`
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


export const CREATE_POST = gql`
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

export const UPDATE_POST = gql`
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

export const DELETE_POST = gql`
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