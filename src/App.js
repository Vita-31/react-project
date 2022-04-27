import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className='main'>
      <h1 className='title'>Список користувачів</h1>
      <UsersList/>
    </div>
  );
}

export default App;
