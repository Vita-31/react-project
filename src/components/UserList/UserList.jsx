import UserItem from '../UserItem/UserItem'
import './UserList.css'

export default function UsersList({data}) {

    if(data.error) {
        return (
            <h2>Has been some error</h2>
        )
    }

    if(data.load) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <div className="users">
            { data.users.map((user) =>  (
                <UserItem key={ user.id } user={ user }></UserItem>
            )) }
        </div>
    )
}