const User = require('./models/user');

// Controller functions for CRUD operations
const createUser = async (req, res) => {
  // Create a new user record
  try {
    const { name, email, password, gender, isActive } = req.body;

    // Validate the incoming data
    if (!name || !email || !password || !gender || isActive === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use.' });
    }

    // Create a new user record
    const newUser = new User({ name, email, password, gender, isActive });
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const getUserList = async (req, res) => {
  // Retrieve a list of user records
  try {
    // Retrieve a list of user records
    const userList = await User.find();
    return res.status(200).json(userList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const getUserById = async (req, res) => {
  // Retrieve a single user record by ID
  try {
    const userId = req.params.id;

    // Retrieve a single user record by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const updateUser = async (req, res) => {
  // Update a user record
  try {
    const userId = req.params.id;
    const { name, email, password, gender, isActive } = req.body;

    // Validate the incoming data
    if (!name || !email || !password || !gender || isActive === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Check if the user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields
    user.name = name;
    user.email = email;
    user.password = password;
    user.gender = gender;
    user.isActive = isActive;

    // Save the updated user
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }

};

const deleteUser = async (req, res) => {
  // Delete a user record
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await user.remove();

    return res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
};
