import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="user-list-heading">User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li className="user-item" key={user.id}>
            <img className="user-avatar" src="https://via.placeholder.com/40" alt="User Avatar" />
            <div>
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
