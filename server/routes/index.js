const router = require('express').Router();
const tweetRoutes = require('./Tweet');
const userRoutes = require('./User');


router.use('/Tweet', tweetRoutes);
router.use('/User', userRoutes);


module.exports = router;
