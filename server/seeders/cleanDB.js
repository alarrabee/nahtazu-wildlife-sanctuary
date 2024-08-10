
// const models = require('../models');
// const db = require('../config/connection');

// module.exports = async (modelName, collectionName) => {
//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }

const mongoose = require('mongoose');
const db = require('../config/connection'); // Ensure this properly connects to your DB

module.exports = async (modelName, collectionName) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionExists = collections.some(col => col.name === collectionName);

    if (collectionExists) {
      await mongoose.connection.db.dropCollection(collectionName);
    }

  } catch (err) {
    console.error('Error in cleanDB:', err);
    throw err;
  }
};
