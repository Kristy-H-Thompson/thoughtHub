const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Define the Reaction schema (you may already have it)
const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => createdAtVal.toISOString().slice(0, 19).replace('T', ' '),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,  // Enforce length limit
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => createdAtVal.toISOString().slice(0, 19).replace('T', ' '), // Format the timestamp
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            reactionSchema,  // Use the Reaction schema directly
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Virtual for the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;  // Return the length of the reactions array
});

// Create the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;