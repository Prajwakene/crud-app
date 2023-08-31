import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    isActive: true,
  });

  useEffect(() => {
    // Fetch the user's data for editing from your backend
    axios.get(`/api/users/${id}`).then((response) => {
      setUser(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the user
    axios.put(`/api/users/${id}`, user).then((response) => {
      // Handle success or error
    });
  };

  return (
    <div>
      <h2>Edit User</h2>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
