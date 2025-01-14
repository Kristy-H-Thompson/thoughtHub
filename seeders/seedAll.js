// seedAll.js
const mongoose = require('mongoose');
const seedUsers = require('./seedUsers');
const seedThoughts = require('./seedThoughts');
const seedReactions = require('./seedReactions');

const MONGODB_URI = 'mongodb://localhost:27017/thoughtHub'; // Replace with your MongoDB URI

async function seedAll() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Seed Users
    await seedUsers();
    console.log('Users seeded successfully.');

    // Seed Thoughts
    await seedThoughts();
    console.log('Thoughts seeded successfully.');

    // Seed Reactions
    await seedReactions();
    console.log('Reactions seeded successfully.');

  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    // Always disconnect from MongoDB in the finally block to ensure it gets closed
    try {
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    } catch (disconnectError) {
      console.error('Error disconnecting from MongoDB:', disconnectError);
    }
  }
}

// Ensure you export the seedAll function
module.exports = seedAll;