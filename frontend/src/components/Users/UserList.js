import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from your backend
    axios.get('/api/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
