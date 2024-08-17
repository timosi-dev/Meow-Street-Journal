const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
   title: {
      type:String,
      required: [true, 'Please add a title']
   },
   text: {
      type:String,
      required: [true, 'Please add text']
   },
   tag: {
      type: String,
   },
   username: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now
   }

});

module.exports = mongoose.model('Post', PostSchema);