const express = require('express');
const router = express.Router();
const { createThought, getAllThoughts, getThoughtById, updateThought, deleteThought } = require('../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;