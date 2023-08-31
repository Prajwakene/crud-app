const express = require('express');
const router = express.Router();
const {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
} = require('./controllers/userController');

// Define routes for CRUD operations
router.post('/users', createUser);
router.get('/users', getUserList);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
