const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/socialNetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});