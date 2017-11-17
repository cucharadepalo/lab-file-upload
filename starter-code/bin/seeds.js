const databaseURL = "mongodb://localhost/tumblr-lab-development";
mongoose.connect(databaseURL, {useMongoClient: true}, () => debug(`Connected to db: ${databaseURL}`));
const Post = require('../models/Post');

const postData = [{
  title: 'Chilean Fire',
  content: '#FA7000',
  creatorId: 'ObjectId("5a0c81b0287e9d1009287cac")',
  picPath: String,
  picName: String,
  comments: []
}, {
  title: '',
  content: '',
  creatorId: 'ObjectId("5a0c81b0287e9d1009287cac")',
  picPath: String,
  picName: String,
  comments: []
}, {
  title: '',
  content: '',
  creatorId: 'ObjectId("5a0c81b0287e9d1009287cac")',
  picPath: String,
  picName: String,
  comments: []
}, ];

Post.create(postData, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((post) => {
    console.log(post.key1);
  });
  mongoose.connection.close();
});
