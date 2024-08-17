const express = require('express');
const router = express.Router();
const Post = require('../models/post')


//get all posts
router.get('/', async (req, res) => {
   try {
      const posts = await Post.find();
      res.json({success:true, data: posts})
   } catch(error) {
      res.status(500).json({success:false, error: "Something went wrong"});
   }
});

//get single post
router.get('/:id', async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      res.json({success:true, data:post})
   } catch (error) {
      res.status(500).json({success:false, error: "Something went wrong"});
   }
});

//add a post
router.post('/', async (req, res) => {
   const post = new Post ({
      title: req.body.title,
      text: req.body.text,
      tag: req.body.tag,
      username: req.body.username
   });

   try {
     const savedPost =  await post.save();
     res.json({success:true, data: savedPost})
   } catch (error) {
      res.status(500).json({success:false, error: "Something went wrong"});
   }
});

//update a post
router.put('/:id', async (req, res) => {

   try {
      const updatedPost = await Post.findByIdAndUpdate(
         req.params.id, {
            $set: {
               title: req.body.title,
               text: req.body.text,
               tag: req.body.tag
            }
         },
         { new: true }
      );
      res.json({success:true, data: updatedPost});
   } catch (error) {
      res.status(500).json({success:false, error: "Something went wrong"});
   }
});

//Delete post
router.delete('/:id', async (req, res) => {
   try {
      await Post.findByIdAndDelete(req.params.id);
      res.json({success:true, data: {}});
   } catch (error) {
      res.status(500).json({success:false, error: "Something went wrong"});
   }

   
});

module.exports = router;