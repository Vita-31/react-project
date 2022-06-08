import './App.css';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import CreateUser from './components/CreateUser/CreateUser';
import UsersProvider from './context/UsersContext';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import Button from './components/Button/Button';
import { Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage/UserPage';

function App() {

  const sortOptions = [
    {
      value: 'name/asc',
      label: 'Name from A to Z'
    },
    {
      value: 'name/desc',
      label: 'Name from Z to A'
    },
    {
      value: 'username/asc',
      label: 'Username from A to Z'
    },
    {
      value: 'username/desc',
      label: 'Username from Z to A'
    }
  ]

  return (
    <>
    <Header/>
    <div className='container main'>
      <UsersProvider>
        <Routes>
          <Route path="/create" element={<CreateUser/>}></Route>
          <Route path="/" element={ 
            <>
              <div className='filters'>
                <Search/>
                <Sort options={sortOptions}/>
              </div>
              <UserList/> 
              <div className='mainBtn'>
                <Button bg={'black'} size={'large'}>Показати більше</Button>
              </div>
            </>
          }/>
        </Routes>
        <Modal></Modal>
      </UsersProvider>
    </div>
    </>
  );
}

export default App;
