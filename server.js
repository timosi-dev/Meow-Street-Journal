const express  = require('express');
const port = 5000;

const app = express();

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

app.get('/', (req, res) => {
   res.send('Hello world');
});

//get all posts
app.get('/api/posts', (req, res) => {
   res.json({success:true, data: blogPosts});
});

//get single post
app.get('/api/posts/:id', (req, res) => {
   const post = blogPosts.find((post) => post.id === +req.params.id);

   if(!post) {
      return res.status(404)
      .json({success:false, error:'Resource not found'});
   }
   res.json({success:true, data: post});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));