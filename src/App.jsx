import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import CreateUser from './components/CreateUser/CreateUser';
import UsersProvider from './context/UsersContext';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';

function App() {

  return (
    <>
    <Header/>
    <div className='container main'>
      <UsersProvider>
        <CreateUser/>
        <Search/>
        <UserList/>
        <Modal></Modal>
      </UsersProvider>
    </div>
    </>
  );
}

export default App;
