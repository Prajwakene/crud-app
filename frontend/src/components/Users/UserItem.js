import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <Link to={`/edit/${user._id}`}>Edit</Link>
    </div>
  );
};

export default UserItem;
