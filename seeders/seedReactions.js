const mongoose = require('mongoose');
const Thought = require('../models/Thought');  // Import the Thought schema
const Reaction = require('../models/Reaction');  // Import the Reaction schema
const User = require('../models/User');  // Import the User schema

const seedReactions = async () => {
    try {
      // Get all thoughts to seed reactions
      const thoughts = await Thought.find();
  
      for (let thought of thoughts) {
        // Example reactions data (ensure these are the correct usernames and bodies)
        const reactionsData = [
          { reactionBody: 'This is amazing!', username: 'john_doe' },
          { reactionBody: 'I completely agree!', username: 'jane_smith' },
          { reactionBody: 'So true!', username: 'sam_jones' },
        ];
  
        console.log(`Seeding reactions for thought: ${thought.thoughtText}`);
  
        // Add reactions to the thought's reactions array
        for (let reactionData of reactionsData) {
          // Ensure both required fields are present before creating reaction
          if (!reactionData.reactionBody || !reactionData.username) {
            console.error('Reaction data is missing required fields:', reactionData);
            continue; // Skip this reaction if data is incomplete
          }
  
          // Create a reaction document and push it to the thought's reactions array
          thought.reactions.push(reactionData);
        }
  
        // Save the thought with new reactions
        await thought.save();
        console.log(`Reactions added to thought: ${thought.thoughtText}`);
      }
  
      console.log('All reactions seeded successfully!');
    } catch (error) {
      console.error('Error seeding reactions:', error);
    }
  };

module.exports = seedReactions;  // Export the function