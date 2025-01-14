# Thought Hub
![License](https://img.shields.io/badge/License-MIT-yellow.svg "License")

## Description
Thoughthub is an API that I built from scratch for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend lists. I uses Express.js for routing, a MongoDB database, Mongoose ODM,  Express.js and Mongoose packages.

- What was your motivation?
I created this application to gain more experience with MongoDB and Mongoose. 


## Features
- GET, POST, DELETE, and PUT user routes
- GET, POST, DELETE, and PUT thought routes
- GET, DELETE reaction routes
- ADD, DELETE friends

## Technologies
- Express.js
- MongoDB
- Mongoose
- Express.js


## Link to demo video
[link](https://skywatchers.onrender.com](https://drive.google.com/file/d/1CHQRLt-ZPV831H47Q_aGCfMFybJZ5vp8/view?usp=sharing)

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [UserStories](#userStories)


## Installation
Copy over my code to your local machine. Use node server.js command in your termminal. Use MongoDB Compass to ensure your database has been seeded correctly. Test routes in Insomnia.

## Usage
Same as above 


## Credits
### Contributors
- [Kristy Thompson](https://github.com/Kristy-H-Thompson)

### Reasources used

- Install MongoDB: [Link](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
- MongoDB: [LINK](https://www.mongodb.com/docs/v5.0/reference/method/cursor.toArray/)
- Profesional readMe Guide: [Link](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- Mongoose: [Link](https://mongoosejs.com/)

## License
MIT License

## User Stories
- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
- WHEN I enter the command to invoke the application, THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts, THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia, THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia, THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list


