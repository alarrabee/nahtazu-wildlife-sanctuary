const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');



mongoose.connect('mongodb://localhost:27017/nahtazu', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();

    const users = await User.create(userSeeds);

    for (const postSeed of postSeeds) {
      const user = users.find(user => user.username === postSeed.postAuthor);
      if (user) {
        const post = await Post.create({ ...postSeed, postAuthor: user._id });
        user.posts.push(post._id);
        await user.save();
      }
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
