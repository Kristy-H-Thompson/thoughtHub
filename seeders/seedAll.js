const mongoose = require('mongoose');
const seedThoughts = require('./seedThoughts');
const seedUsers = require('./seedUsers');

mongoose.connect('mongodb://localhost:27017/thoughtHub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');
    
    await seedThoughts();  // Seed thoughts first
    await seedUsers();     // Seed users and link them to thoughts
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });