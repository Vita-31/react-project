import { useEffect } from 'react'
import { getUsers } from '../../api/users'
import useUsers from '../../hooks/useUsers'
import Spinner from '../Spinner/Spinner'
import UserItem from '../UserItem/UserItem'
import './UserList.css' 
import fetchUsers from '../../context/UsersContext'
import { useDispatch } from 'react-redux'
import { endUsersLoad, setErrorUsers, setUsers, startUsersLoad } from '../../store/users/actionCreators'

export default function UsersList() {
    const {usersError, usersLoad, users, setFirst} = useUsers()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startUsersLoad())
        getUsers()
            .then(res => {
                dispatch(setUsers(res.data))
            })
            .catch(error => dispatch(setErrorUsers(error)))
            .finally(() => dispatch(endUsersLoad()))
        
        // fetchUsers({
        //     _limit: 3
        // })
    }, [setFirst])

    if(usersError) {
        return (
            <h2>Has been some error</h2>
        )
    }

    if(usersLoad) {
        return (
            <Spinner/>
        )
    }

    return (
        <>
            <div className="users">
                { users   
                // .filter((user) => 
                //     `${user.name} ${user.username} ${user.email} ${user.phone}`
                //     .toLocaleLowerCase()
                //     .includes(searchQuery)
                // )
                // .sort((a, b) => {
                //     return String(Number(a[sortParams.key]) || a[sortParams.key])
                //     .localeCompare(String(Number(b[sortParams.key]) || b[sortParams.key]), 
                //     undefined, { numeric: true }) * sortParams.order
                // })
                .map((user) =>  (
                    <UserItem key={ user.id } user={ user }></UserItem>
                )) }
            </div>
        </>
        
    )
}