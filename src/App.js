import React from 'react'

import './App.css'
import useStorage from './hooks/useStorage'
import Form from './components/form'
import Users from './components/users'


function App() {
  const {users, deleting, deleteUser, createUser, creating} = useStorage()
  // eslint-disable-next-line no-undef
  console.log('Process', process.env.REACT_APP_BACKEND_URL)
  return (
    <div className='App'>
      <Form {...{createUser, creating}} />
      <Users {...{users, deleting, deleteUser}} />
    </div>
  );
}

export default App;
