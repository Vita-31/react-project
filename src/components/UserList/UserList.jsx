import useUsers from '../../hooks/useUsers'
import UserItem from '../UserItem/UserItem'
import './UserList.css'

export default function UsersList() {
    const {usersError, usersLoad, users} = useUsers()

    if(usersError) {
        return (
            <h2>Has been some error</h2>
        )
    }

    if(usersLoad) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <>
            <div className="users">
                { users.map((user) =>  (
                    <UserItem key={ user.id } user={ user }></UserItem>
                )) }
            </div>
        </>
        
    )
}