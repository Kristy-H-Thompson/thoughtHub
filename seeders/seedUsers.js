const mongoose = require('mongoose');
const { User, Thought } = require('../models'); // Assuming you're using User and Thought models

// Sample user data
const usersData = [
  { username: 'john_doe', email: 'john.doe@example.com' },
  { username: 'jane_smith', email: 'jane.smith@example.com' },
  { username: 'sam_jones', email: 'sam.jones@example.com' },
];

// Function to seed users
async function seedUsers(thoughts) {
  try {
    // Clear existing users
    await User.deleteMany({});

    // Create users
    const users = await User.insertMany(usersData);

    // Update users with their corresponding thoughts
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      // Filter thoughts by username to assign thoughts to the correct user
      const userThoughts = thoughts.filter(thought => thought.username === user.username);
      const thoughtIds = userThoughts.map(thought => thought._id);

      // Update each user with the thought IDs
      await User.findByIdAndUpdate(user._id, { $push: { thoughts: { $each: thoughtIds } } });

      console.log(`User ${user.username} updated with thoughts.`);
    }

    console.log('Users seeded successfully!');
  } catch (err) {
    console.error('Error seeding users:', err);
  } finally {
    mongoose.connection.close();
  }
}

module.exports = seedUsers;