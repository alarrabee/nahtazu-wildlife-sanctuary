import { gql } from '@apollo/client';


export const QUERY_USERS = gql`
  query getUsers {
    users {
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
`;

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(_id: $userId) {
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
`;



export const QUERY_ME = gql`
  query getMe {
    me {
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
`;


export const QUERY_POSTS = gql`
  query getPosts {
    posts {
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


export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(_id: $postId) {
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

