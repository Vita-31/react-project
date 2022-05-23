import useUsers from '../../hooks/useUsers'
import UserItem from '../UserItem/UserItem'
import './UserList.css'

export default function UsersList() {
    const {usersError, usersLoad, users, searchQuery} = useUsers()
    
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
                { users   
                    .filter((user) => 
                        `${user.name} ${user.username} ${user.email} ${user.phone}`
                        .toLocaleLowerCase()
                        .includes(searchQuery)
                    )
                    .map((user) =>  (
                        <UserItem key={ user.id } user={ user }></UserItem>
                    )) }
            </div>
        </>
        
    )
}