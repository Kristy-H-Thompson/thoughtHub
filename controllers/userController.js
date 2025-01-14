const User = require('../models/User'); // Assuming you have a User model

// Controller function to get all users
const getAllUsers = (req, res) => {
    User.find()
        .populate('thoughts') // Populate the thoughts field with the full thought data
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
};

// Controller function to get a single user by id
const getUserById = (req, res) => {
    const { userId } = req.params;
    User.findById(userId)
        .populate('thoughts') // Also populate the thoughts for a single user
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
const deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Step 1: Find the user to delete
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Step 2: Delete all thoughts associated with the user
      await Thought.deleteMany({ username: user.username });
  
      // Step 3: Delete the user
      await User.findByIdAndDelete(userId);
  
      return res.status(200).json({ message: 'User and associated thoughts deleted successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
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