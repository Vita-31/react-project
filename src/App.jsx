import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import CreateUser from './components/CreateUser/CreateUser';
import { useEffect, useState } from 'react'
import { getUsers } from './api/users';

function App() {

  const [users, setUsers] = useState([])
  const [usersError, setUsersError] = useState(null)
  const [usersLoad, setUsersLoad] = useState(false)

  useEffect(() => {
      getUsers()
          .then(res => setUsers(res.data)) 
          .catch(err => setUsersError(err))
          .finally(() => setUsersLoad(false))
          
  }, [])

  return (
    <>
    <Header/>
    <div className='container main'>
      <CreateUser setUsers={setUsers}/>
      <UserList data={{ users, usersError, usersLoad }} setUsers={setUsers}/>
    </div>
    </>
  );
}

export default App;
