const express  = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));