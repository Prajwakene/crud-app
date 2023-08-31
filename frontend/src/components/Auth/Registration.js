import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    isActive: true,
  });

  const { name, email, password, gender, isActive } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', {
        name,
        email,
        password,
        gender,
        isActive,
      });
      // Handle successful registration, e.g., redirect to login page
      console.log('Registration success:', res.data);
    } catch (err) {
      // Handle registration error, e.g., display an error message
      console.error('Registration failed:', err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <select name="gender" value={gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="isActive"
            checked={isActive}
            onChange={() => setFormData({ ...formData, isActive: !isActive })}
          />
          Active
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
