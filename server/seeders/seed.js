const db = require('../config/connection');
const { User, Tweet } = require('../models');
const tweetSeeds = require('./tweetSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try {
      await Tweet.deleteMany({});
      await User.deleteMany({});
  
      await User.create(userSeeds);
  
      for (let i = 0; i < tweetSeeds.length; i++) {
        const { _id, tweetAuthor } = await Tweet.create(tweetSeeds[i]);
        const user = await User.findOneAndUpdate(
          { username: tweetAuthor },
          {
            $addToSet: {
              tweets: _id,
            },
          }
        );
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  