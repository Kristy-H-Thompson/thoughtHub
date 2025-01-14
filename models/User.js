const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Assuming you have a Thought model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please fill a valid email address'] // Email validation regex
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'  // Reference to the Thought model
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'  // Reference to the User model (self-reference)
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// Virtual for friend count
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;