import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import CreateUser from './components/CreateUser/CreateUser';
import UsersProvider from './context/UsersContext';

function App() {

  return (
    <>
    <Header/>
    <div className='container main'>
      <UsersProvider>
        <CreateUser/>
        <UserList/>
      </UsersProvider>
    </div>
    </>
  );
}

export default App;
