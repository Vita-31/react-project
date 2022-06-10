import { createContext, useState, useEffect } from "react";
import { getUsers } from "../api/users";

export const UsersContext = createContext()

export default function UsersProvider({children}) {

    const [users, setUsers] = useState([])
    const [usersError, setUsersError] = useState(null)
    const [usersLoad, setUsersLoad] = useState(false)
    const [usersModal, setUsersModal] = useState(false)
    const [userId, setUserId] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [user, setUser] = useState({})
    const [sortParams, setSortParams] = useState({
        key: 'name',
        order: 'asc',
    })

    useEffect(() => {
        fetchUsers({
            q: searchQuery,
            _sort: sortParams.key,
            _order: sortParams.order,
            _limit: users.length
        })
    }, [searchQuery, sortParams])
  
    useEffect(() => {
        fetchUsers({
            _limit: 3
        })
    }, [])

    function fetchUsers(params) {
        setUsersLoad(true)
        getUsers(params)
            .then(res => setUsers(res.data)) 
            .catch(err => setUsersError(err))
            .finally(() => setUsersLoad(false))
    }

    function fetchExtraUsers(extraUser) {
        setUsersLoad(true)
        getUsers({
            _start: users.length,
            _end: users.length + extraUser,
            q: searchQuery,
            _sort: sortParams.key,
            _order: sortParams.order,
        })
            .then(res => setUsers(prev => [...prev, ...res.data])) 
            .catch(err => setUsersError(err))
            .finally(() => setUsersLoad(false))
    }

    const usersData = {users, user, usersError, usersLoad, usersModal, userId, searchQuery, sortParams, setUsers, setUser, setUsersError, setUsersLoad, setUsersModal, setUserId, setSearchQuery, setSortParams, fetchUsers, fetchExtraUsers}

    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}