const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Comment {
    _id: ID
    
    commentText: String
    createdAt: String
  }

  type Query {
   
  }

  type Mutation {
   
    addComment(commentId: ID!, commentText: String!): User
   
  }
`;

module.exports = typeDefs;