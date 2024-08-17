const express = require('express');
const router = express.Router();

const blogPosts = [
   {
      id: 1,
      title: 'Going on a Vacation',
      text: "We have the perfect platform to help you connect with the right influencers for your brand. Join our Club for free and start making connections today!",
      tag: 'Fashion',
      username: 'timo',
      date: '2024-17-08'
   },
   {
      id: 2,
      title: 'Have a rest',
      text: "We have the perfect platform to help you connect with the right influencers for your brand. Join our Club for free and start making connections today!",
      tag: 'Lounging',
      username: 'lilu',
      date: '2024-17-08'
   },
   {
      id: 3,
      title: 'Platform Talk',
      text: "We have the perfect platform to help you connect with the right influencers for your brand. Join our Club for free and start making connections today!",
      tag: 'Travel',
      username: 'alex',
      date: '2024-17-08'
   }
]

//get all posts
router.get('/', (req, res) => {
   res.json({success:true, data: blogPosts});
});

//get single post
router.get('/:id', (req, res) => {
   const post = blogPosts.find((post) => post.id === +req.params.id);

   if(!post) {
      return res.status(404)
      .json({success:false, error:'Resource not found'});
   }
   res.json({success:true, data: post});
});

//add a post
router.post('/', (req, res) => {
   const post = {
      id: blogPosts.length+1,
      title: req.body.title,
      text: req.body.text,
      tag: req.body.tag,
      username: req.body.username,
      date: new Date().toISOString().slice(0,10)
   };

   console.log(post);
   blogPosts.push(post);

   res.json({success:true, data: post});
});

//update a post
router.put('/:id', (req, res) => {
   const post = blogPosts.find((post) => post.id === +req.params.id);

   if(!post) {
      return res.status(404)
      .json({success:false, error:'Resource not found'});
   }

   post.title = req.body.title || post.title;
   post.text = req.body.text || post.text;
   post.tag = req.body.tag || post.tag;

   res.json({success:true, data: post});
});

//Delete post
router.delete('/:id', (req, res) => {
   const post = blogPosts.find((post) => post.id === +req.params.id);

   if(!post) {
      return res.status(404)
      .json({success:false, error:'Resource not found'});
   }
   const index = blogPosts.indexOf(post);
   blogPosts.splice(index, 1);

   res.json({success:true, data: {}});
});

module.exports = router;