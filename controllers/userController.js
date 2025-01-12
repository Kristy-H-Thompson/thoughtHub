const User = require('../models/User'); // Assuming you have a User model

// Controller function to get all users
const getAllUsers = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
};

// Controller function to get a single user by id
const getUserById = (req, res) => {
    const { userId } = req.params;
    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        })
        .catch(err => res.status(500).json(err));
};

// Controller function to create a new user
const createUser = (req, res) => {
    const { username, email } = req.body;
    User.create({ username, email })
        .then(newUser => res.json(newUser))
        .catch(err => res.status(500).json(err));
};

// Controller function to update a user by id
const updateUser = (req, res) => {
    const { userId } = req.params;
    const { username, email } = req.body;
    User.findByIdAndUpdate(userId, { username, email }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json(err));
};

// Controller function to delete a user by id
const deleteUser = (req, res) => {
    const { userId } = req.params;
    User.findByIdAndDelete(userId)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(err => res.status(500).json(err));
};

// Controller function to add a friend
const addFriend = (req, res) => {
    const { userId, friendId } = req.params;
    User.findByIdAndUpdate(userId, { $push: { friends: friendId } }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json(err));
};

// Controller function to remove a friend
const removeFriend = (req, res) => {
    const { userId, friendId } = req.params;
    User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json(err));
};

// Export all the controller functions
module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser, addFriend, removeFriend };