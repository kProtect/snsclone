import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TWEET = gql`
  mutation addTweet($tweetText: String!) {
    addTweet(tweetText: $tweetText) {
      _id
      tweetText
      tweetAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($tweetId: ID!, $commentText: String!) {
    addComment(tweetId: $tweetId, commentText: $commentText) {
      _id
      tweetText
      tweetAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
