import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <div className='container main'>
        <h1 className='title'>Список користувачів</h1>
        <UserList/>
    </div>
    </>
  );
}

export default App;
