const mongoose = require('mongoose');
const { Thought } = require('../models'); // Assuming you're using Thought model from models directory

// Seed thoughts data
const thoughtsData = [
  { thoughtText: "I'm thinking about building something amazing.", username: 'john_doe' },
  { thoughtText: "The weather is great today!", username: 'jane_smith' },
  { thoughtText: "Learning to code is fun!", username: 'sam_jones' },
];

// Function to seed thoughts
async function seedThoughts() {
  try {
    // Clear existing thoughts
    await Thought.deleteMany({});

    // Create new thoughts and return them
    const thoughts = await Thought.insertMany(thoughtsData);

    console.log('Thoughts seeded:', thoughts);
    return thoughts;  // Return the created thoughts to use later
  } catch (err) {
    console.error('Error seeding thoughts:', err);
  }
}

seedThoughts();