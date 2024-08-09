import { gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
      email
      favoriteExhibits {
        exhibitId
        title
      }
    }
  }
`;

const GET_USER = gql`
    query GetUser($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            favoriteExhibits {
                exhibitId
                title
            }
        }
    }
`;


const ADD_FAVORITE = gql`
  mutation AddFavorite($userId: ID!, $exhibitId: String!) {
    addFavorite(userId: $userId, exhibitId: $exhibitId) {
      _id
      favoriteExhibits {
        exhibitId
        title
      }
    }
  }
`;
