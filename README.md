Thought Hub
![License](https://img.shields.io/badge/License-MIT-yellow.svg "License")

Description
Thought Hub is a social network API where users can share thoughts, interact with friends' posts, and manage friend lists. Developed from scratch using Express.js, MongoDB, and Mongoose, this application provides the backend for handling user data, thoughts, reactions, and friendships.

Motivation
I developed this project to deepen my knowledge and experience with MongoDB and Mongoose. The goal was to create a social network application with a NoSQL database to handle complex data relationships, providing practical insight into database management, routing, and API development.

Features
- User Routes: Manage users with GET, POST, PUT, and DELETE methods.
- Thought Routes: Create, update, view, and delete thoughts with the ability to interact with them.
- Reaction Routes: Add and remove reactions on thoughts.
- Friendship Routes: Add and remove friends from a user's friend list.

Technologies Used
- Express.js: For routing and handling HTTP requests.
- MongoDB: NoSQL database for storing user and thought data.
- Mongoose: ODM to interact with MongoDB and define models.
- Node.js: Backend JavaScript runtime.

Demo
You can view the demo video of the application through the following link:
[Demo Video](https://drive.google.com/file/d/1CHQRLt-ZPV831H47Q_aGCfMFybJZ5vp8/view?usp=sharing)

Table of Contents
- Installation
- Usage
- Credits
- License
- User Stories
- Acceptance Criteria

Installation
1. Clone this repository to your local machine:
    git clone https://github.com/your-username/thought-hub.git
2. Navigate into the project directory:
    cd thought-hub
3. Install dependencies:
    npm install
4. Set up MongoDB:
    - Make sure you have MongoDB installed, or use MongoDB Atlas for a cloud database.
    - If using MongoDB Compass, ensure the database is seeded correctly.
5. Start the server:
    node server.js
6. Use Insomnia or Postman to test the API routes for users, thoughts, reactions, and friendships.

Usage
After installation and server startup, you can use Insomnia or Postman to interact with the API. Available routes include:
- GET, POST, PUT, DELETE for users and thoughts.
- POST, DELETE for reactions and friends.

Credits
Contributors
- Kristy Thompson: [GitHub Profile](https://github.com/Kristy-H-Thompson)

Resources
- [MongoDB Installation Guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
- [MongoDB Documentation](https://www.mongodb.com/docs/v5.0/reference/method/cursor.toArray/)
- [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [Mongoose Documentation](https://mongoosejs.com/)

License
This project is licensed under the MIT License.

User Stories
- As a social media startup, I want an API for my social network that uses a NoSQL database, so that my website can handle large amounts of unstructured data and scale easily.

Acceptance Criteria
GIVEN a social network API:
- When I invoke the application, then the server starts and the Mongoose models sync with the MongoDB database.
- When I open API GET routes in Insomnia for users and thoughts, then the data is displayed in a well-formatted JSON.
- When I test API POST, PUT, and DELETE routes in Insomnia, then I can successfully create, update, and delete users and thoughts in the database.
- When I test API POST and DELETE routes for reactions and friendships, then I can successfully add/remove reactions and modify friend lists.
