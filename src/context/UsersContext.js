import { createContext, useState, useEffect } from "react";
import { getUsers } from "../api/users";

export const UsersContext = createContext()

export default function UsersProvider({children}) {

    const [users, setUsers] = useState([])
    const [usersError, setUsersError] = useState(null)
    const [usersLoad, setUsersLoad] = useState(false)
    const [usersModal, setUsersModal] = useState(false)
    const [userId, setUserId] = useState()
    const [userKey, setUserKey] = useState()
  
    useEffect(() => {
        getUsers()
            .then(res => setUsers(res.data)) 
            .catch(err => setUsersError(err))
            .finally(() => setUsersLoad(false))
            
    }, [])

    const usersData = {users, usersError, usersLoad, usersModal, userId, userKey, setUsers, setUsersError, setUsersLoad, setUsersModal, setUserId, setUserKey}

    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}