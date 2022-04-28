import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <div className='container main'>
        <UserList/>
    </div>
    </>
  );
}

export default App;
