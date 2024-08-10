const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('users');
    await User.create(userSeeds);
    console.log('Users seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
