const Reaction = require('../models/Reaction');
const Thought = require('../models/Thought');

// Create a new reaction to a thought
const createReaction = (req, res) => {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    // Create a new reaction
    Reaction.create({ reactionBody, username })
        .then(newReaction => {
            // Add the reaction to the thought's reactions array
            return Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: newReaction._id } },
                { new: true }
            );
        })
        .then(updatedThought => res.json(updatedThought))
        .catch(err => res.status(500).json(err));
};

// Delete a reaction
const deleteReaction = (req, res) => {
    const { thoughtId, reactionId } = req.params;

    // Remove the reaction from the thought's reactions array
    Thought.findByIdAndUpdate(
        thoughtId,
        { $pull: { reactions: reactionId } },
        { new: true }
    )
        .then(() => {
            return Reaction.findByIdAndDelete(reactionId);
        })
        .then(() => res.json({ message: 'Reaction deleted successfully' }))
        .catch(err => res.status(500).json(err));
};

// Export the controller functions
module.exports = { createReaction, deleteReaction };