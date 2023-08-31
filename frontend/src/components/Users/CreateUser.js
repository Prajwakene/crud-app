import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to create a new user
    axios.post('/api/users', user).then((response) => {
      // Handle success or error
    });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <select name="gender" value={user.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="isActive"
            checked={user.isActive}
            onChange={() => setUser({ ...user, isActive: !user.isActive })}
          />
          Active
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
