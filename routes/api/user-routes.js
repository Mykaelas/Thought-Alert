const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controller/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// api/users/friends/
router
  .route('/:userId/friends/')
  .post(addFriend);

router
  .route('/:userId/friends/friendId')
  .delete(deleteFriend);

module.exports = router;
