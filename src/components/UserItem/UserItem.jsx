import './UserItem.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import UserBlock from '../UserBlock/UserBlock'
import UserPage from '../UserPage/UserPage';

export default function UserItem({user}) {
    
    return (
        <>
            <NavLink to={`/user/${user.id}`} className="userItem">
                <UserBlock title='Name:' desc={user.name}/>
                <UserBlock title='Username:' desc={user.username}/>
                <UserBlock title='Email:' desc={user.email}/>
                <UserBlock title='Phone:' desc={user.phone}/>
            </NavLink>
            <Routes>
                <Route path={`/user/${user.id}`} element={<UserPage userItem={user} />}> </Route>
            </Routes>
        </>
        
    )
}