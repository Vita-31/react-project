import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import CreateUser from './components/CreateUser/CreateUser';

function App() {
  return (
    <>
    <Header/>
    <div className='container main'>
      <CreateUser/>
      <UserList/>
    </div>
    </>
  );
}

export default App;
