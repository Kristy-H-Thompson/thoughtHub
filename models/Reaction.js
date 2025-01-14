const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Reaction Schema (to be used as a subdocument within the Thought model)
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,  // Reaction ID as an ObjectId
            default: () => new mongoose.Types.ObjectId(),  // Default value is a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,  // Ensure the reaction body does not exceed 280 characters
        },
        username: {
            type: String,
            required: true,  // Username is required
        },
        createdAt: {
            type: Date,
            default: Date.now,  // Set default to current timestamp
            get: (createdAtVal) => createdAtVal.toISOString().slice(0, 19).replace('T', ' '),  // Format timestamp
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,  // Don't include the virtual `id` field in the document
    }
);

// Export the schema, though this is not a model, it will be used as a subdocument in the Thought model\
const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;