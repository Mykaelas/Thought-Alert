const router = require('express').Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
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
  .post(addReaction)
  .put(updateThought);

// /api/Thoughts/<thoughtId>/reaction/<reactionId>
router
  .route('/:thoughtId/reaction/:reactionId')
  .delete(removeReaction);
 


module.exports = router;
