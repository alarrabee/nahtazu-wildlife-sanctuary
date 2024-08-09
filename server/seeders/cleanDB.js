const db = require('../config/connection');  // Ensure this exports the Mongoose connection

module.exports = async (collectionName) => {
  try {
    // Ensure the connection is open
    await new Promise((resolve, reject) => {
      if (db.readyState === 1) {
        // Already connected
        resolve();
      } else {
        // Wait for the connection to open
        db.once('open', resolve);
        db.on('error', reject);
      }
    });

    // Check if the collection exists
    const collections = await db.db.listCollections({ name: collectionName }).toArray();

    if (collections.length) {
      await db.db.dropCollection(collectionName);
      console.log(`Dropped collection: ${collectionName}`);
    } else {
      console.log(`Collection: ${collectionName} does not exist`);
    }
  } catch (err) {
    console.error(`Error cleaning the collection ${collectionName}:`, err);
    throw err;
  }
};
