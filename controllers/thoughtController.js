// controllers/thoughtController.js
const Thought = require('../models/Thought');
const User = require('../models/User'); // Assuming you need this for handling thoughts related to users

// Get all thoughts
const getAllThoughts = (req, res) => {
    Thought.find()
        .then(thoughts => res.json(thoughts))
        .catch(err => res.status(500).json(err));
};

// Get a single thought by ID
const getThoughtById = (req, res) => {
    const { thoughtId } = req.params;
    Thought.findById(thoughtId)
        .then(thought => {
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
        })
        .catch(err => res.status(500).json(err));
};

// Create a new thought
const createThought = (req, res) => {
    const { thoughtText, username, userId } = req.body;
    Thought.create({ thoughtText, username, userId })
        .then(newThought => {
            return User.findByIdAndUpdate(userId, { $push: { thoughts: newThought._id } }, { new: true });
        })
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
};

// Update a thought by ID
const updateThought = (req, res) => {
    const { thoughtId } = req.params;
    const { thoughtText } = req.body;
    Thought.findByIdAndUpdate(thoughtId, { thoughtText }, { new: true })
        .then(updatedThought => res.json(updatedThought))
        .catch(err => res.status(500).json(err));
};

// Delete a thought by ID
const deleteThought = (req, res) => {
    const { thoughtId } = req.params;
    Thought.findByIdAndDelete(thoughtId)
        .then(() => res.json({ message: 'Thought deleted successfully' }))
        .catch(err => res.status(500).json(err));
};

// Export the controller functions
module.exports = { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought };