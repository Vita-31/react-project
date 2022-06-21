import { useEffect } from 'react'
import useUsers from '../../hooks/useUsers'
import Spinner from '../Spinner/Spinner'
import UserItem from '../UserItem/UserItem'
import './UserList.css' 
import fetchUsers from '../../context/UsersContext'
import { getUsers } from '../../api/users'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers, setUsersError, startFetching, stopFetching } from '../../store/users/actionCreators'
import { usersSelectors } from '../../store/users/selectors'

export default function UsersList() {
    const {usersError, usersLoad, setFirst} = useUsers()
    const dispatch = useDispatch()
    const users = useSelector(usersSelectors)

    useEffect(() => {
        dispatch(startFetching())
        getUsers()
            .then(res => {
                dispatch(setUsers(res.data))
            })
            .catch(error => {
                dispatch(setUsersError(error))
            })
            .finally(() => {
                dispatch(stopFetching())
            })
    }, [])

    // for context api
    // useEffect(() => {
    //     fetchUsers({
    //         _limit: 3
    //     })
    //     // setFirst(true)
    // }, [])

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
                { users.data   
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