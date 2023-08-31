const express = require('express');
const router = express.Router();
const {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController'); // Assuming userController.js is in the same directory as userRoutes.js

// Middleware for handling errors
const handleError = (res, error) => {
  console.error(error);
  return res.status(500).json({ message: 'Server Error' });
};

// Middleware for handling async functions
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => handleError(res, error));
};

// Create a new user
router.post('/users', async (req, res) => {
  try {
    await createUser(req, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

// Retrieve a list of user records
router.get('/users', async (req, res) => {
  try {
    await getUserList(req, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

// Retrieve a single user record by ID
router.get('/users/:id', async (req, res) => {
  try {
    await getUserById(req, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

// Update a user record by ID
router.put('/users/:id', async (req, res) => {
  try {
    await updateUser(req, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a user record by ID
router.delete('/users/:id', async (req, res) => {
  try {
    await deleteUser(req, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});
module.exports = router;
