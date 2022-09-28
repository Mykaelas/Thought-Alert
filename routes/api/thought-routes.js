const router = require('express').Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
  getThoughtById,
  addReaction,
  removeReaction
} = require('../../controller/Thought-controller');

// /api/Thoughts
router
  .route('/')
  .post(addThought)
  .get(getAllThoughts);

// /api/Thoughts/thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .delete(removeThought)
  .post(addReaction);

// /api/Thoughts/<userId>/<ThoughtId>/reactionId
router
  .route('/:thoughtId/reaction/:reactionId')
  .delete(removeReaction);
 


module.exports = router;
