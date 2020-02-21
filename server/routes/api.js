const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');
const parser = new Parser();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/news', (req, res) => {
    // Get posts from the rss feed
    // This should ideally be replaced with a service that connects to MongoDB

    (async () => {

        let feed = await parser.parseURL('https://www.audi-mediacenter.com/en/feeds/press-releases');
        //console.log(feed);
        res.status(200).json(feed.items);

      })();


  });

module.exports = router;
