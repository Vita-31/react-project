import './UserItem.css'
import UserBlock from '../UserBlock/UserBlock'
import { NavLink } from 'react-router-dom'

export default function UserItem({user}) {
    
    return (
        <>
            <NavLink to={`/${user.id}`} className="userItem">
                <UserBlock title='Name:' desc={user.name}/>
                <UserBlock title='Username:' desc={user.username}/>
                <UserBlock title='Email:' desc={user.email}/>
                <UserBlock title='Phone:' desc={user.phone}/>
            </NavLink>
        </>   
    )
}