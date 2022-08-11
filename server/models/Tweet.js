const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//     {
//       id: "8xf0y6ziyjabvozdd252nd",
//       text: "I love coding",
//       author: "Charnay_Birton",
//       timestamp: 1659809874328,
//       likes: ['Ben_Smtih,Charnay_Birton'],
//       replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
//       replyingTo: null,
//     }

const tweetSchema = new Schema({
  text: {
    type: String,
    required: "You need to leave a Tweet!",
    minlength: 1,
    maxlength: 250,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  likes: [
    {
      type: String,
    },
  ],
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reply",
    },
  ],
  replyingTo: {
    type: Schema.Types.ObjectId,
    ref: "Tweet",
  },
});

const Tweet = model('Tweet', tweetSchema);

module.exports = Tweet;
