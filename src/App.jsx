import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className='main'>
      <div className="container">
        <h1 className='title'>Список користувачів</h1>
        <UsersList/>
      </div>
    </div>
  );
}

export default App;
