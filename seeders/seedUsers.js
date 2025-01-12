const User = require('../models/User');
const Thought = require('../models/Thought');

// Sample user data (ensure these match your seeded thoughts)
const usersData = [
  { username: "john_doe", email: "john.doe@example.com" },
  { username: "jane_smith", email: "jane.smith@example.com" },
  { username: "sam_jones", email: "sam.jones@example.com" },
];

// Function to seed users and link them to thoughts
async function seedUsers() {
  try {
    // Clear existing users before seeding new ones
    await User.deleteMany({});

    // Seed the users with thoughts
    const thoughts = await Thought.find();  // Get all seeded thoughts

    if (thoughts.length === 0) {
      console.log("No thoughts found to link to users.");
      return;  // Exit if no thoughts are found
    }

    for (let i = 0; i < usersData.length; i++) {
      const user = usersData[i];

      // Find the thoughts that belong to this user
      const thoughtIds = thoughts.filter(thought => thought.username === user.username).map(thought => thought._id);

      if (thoughtIds.length === 0) {
        console.log(`No thoughts found for user: ${user.username}`);
      }

      // Create the user and link them to their thoughts
      const newUser = await User.create({
        username: user.username,
        email: user.email,
        thoughts: thoughtIds, // Link thoughts to the user
      });

      console.log(`User ${user.username} created and linked to thoughts: ${thoughtIds}`);
    }

  } catch (err) {
    console.error('Error seeding users:', err);
  }
}

module.exports = seedUsers;