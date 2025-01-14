const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const reactionRoutes = require('./routes/reactionRoutes');
const seedAll = require('./seeders/seedAll'); // Import the seed function from seedAll.js

const app = express();
const PORT = process.env.PORT || 3000;

// Run the seeding process before starting the server
seedAll().then(() => {
    // Once seeding is complete, start the server
    app.use(express.json());

    mongoose.connect('mongodb://localhost:27017/thoughtHub', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

    app.use('/api/users', userRoutes);
    app.use('/api/thoughts', thoughtRoutes);
    app.use('/api/thoughts', reactionRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Error during seeding:', err);
});