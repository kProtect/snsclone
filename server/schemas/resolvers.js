const { AuthenticationError } = require('apollo-server-express');
const { User, Tweet} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('tweets');
    },
    user: async (parent, { name }) => {
      return User.findOne({ username }).populate('tweets');
    },
    tweets: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Tweet.find(params).sort({ createdAt: -1 });
    },
    tweet: async (parent, { tweettId }) => {
      return Tweet.findOne({ _id: tweetId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTweet: async (parent, { text, author }) => {
      const tweet = await Tweet.create({ text, author });

      await User.findOneAndUpdate(
        { name: author },
        { $addToSet: { tweets: tweet._id } }
      );

      return tweet;
    },
    addComment: async (parent, { tweetId, commentText, commentAuthor }) => {
      return tweet.findOneAndUpdate(
        { _id: tweetId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeTweet: async (parent, { tweetId }) => {
      return Tweet.findOneAndDelete({ _id: tweetId });
    },
    removeComment: async (parent, { tweetId, commentId }) => {
      return Tweet.findOneAndUpdate(
        { _id: tweetId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
