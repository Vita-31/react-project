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
    const [sortParams, setSortParams] = useState({
        key: 'name',
        order: 'asc',
    })

    useEffect(() => {
        fetchUsers({
            q: searchQuery,
            _sort: sortParams.key,
            _order: sortParams.order
        })
    }, [searchQuery, sortParams])
  
    useEffect(() => {
        fetchUsers()
    }, [])

    function fetchUsers(params) {
        setUsersLoad(true)
        getUsers(params)
            .then(res => setUsers(res.data)) 
            .catch(err => setUsersError(err))
            .finally(() => setUsersLoad(false))
    }

    const usersData = {users, usersError, usersLoad, usersModal, userId, searchQuery, sortParams, setUsers, setUsersError, setUsersLoad, setUsersModal, setUserId, setSearchQuery, setSortParams, fetchUsers}

    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}