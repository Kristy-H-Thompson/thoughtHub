const Thought = require('../models/Thought'); // Import the Thought model

// Sample thoughts data
const thoughtsData = [
  { thoughtText: "I'm thinking about building something amazing.", username: 'john_doe' },
  { thoughtText: "The weather is great today!", username: 'jane_smith' },
  { thoughtText: "Learning to code is fun!", username: 'sam_jones' },
];

// Function to seed thoughts
async function seedThoughts() {
  try {
    // Clear existing thoughts before seeding new ones
    await Thought.deleteMany({}); // This should work if the model is imported correctly
    const thoughts = await Thought.insertMany(thoughtsData); // Insert the new thoughts
    console.log('Thoughts seeded:', thoughts); // Log the seeded thoughts
    return thoughts; // Return seeded thoughts if needed for linking with users
  } catch (err) {
    console.error('Error seeding thoughts:', err); // Log any errors
  }
}

module.exports = seedThoughts; // Export the function