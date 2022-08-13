const router = require('express').Router();
const { Tweet, User } = require('../models');

// GET all tweets
router.get('/', async (req, res) => {
  try {
    const tweetData = await Tweet.findAll();
    res.status(200).json(tweetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single tweet
router.get('/:id', async (req, res) => {
  try {
    const tweetData = await Tweet.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [{ model: Tweet, as: 'tweet_data' }]
    });

    if (!tweetData) {
      res.status(404).json({ message: 'No message found with this id!' });
      return;
    }

    res.status(200).json(tweetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a tweet
router.post('/', async (req, res) => {
  try {
    const tweetData = await Tweet.create(req.body);
    res.status(200).json(tweetData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a tweet
router.delete('/:id', async (req, res) => {
  try {
    const tweetData = await Tweet.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tweetData) {
      res.status(404).json({ message: 'No tweet found with this id!' });
      return;
    }

    res.status(200).json(tweetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
