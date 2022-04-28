import { useEffect, useState } from 'react'
import { getUsers } from '../../api/users'
import UserItem from '../UserItem/UserItem'
import './UserList.css'

export default function UsersList() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        getUsers()
            .then(res => setUsers(res.data)) 
            .catch(err => setError(err))
            .finally(() => setLoad(false))
            
    }, [])

    if(error) {
        return (
            <h2>Has been some error</h2>
        )
    }

    if(load) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <div className="users">
            { users.map((user) =>  (
                <UserItem key={ user.id } user={ user }></UserItem>
            )) }
        </div>
    )
}