import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: username, age: age, id: Math.random() }]
    });
  }

  return (
    <div>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
