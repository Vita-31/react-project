import { createContext, useState, useEffect } from "react";
import { getUsers } from "../api/users";

export const UsersContext = createContext()

export default function UsersProvider({children}) {

    const [users, setUsers] = useState([])
    const [usersError, setUsersError] = useState(null)
    const [usersLoad, setUsersLoad] = useState(false)
    const [usersModal, setUsersModal] = useState(false)
  
    useEffect(() => {
        getUsers()
            .then(res => setUsers(res.data)) 
            .catch(err => setUsersError(err))
            .finally(() => setUsersLoad(false))
            
    }, [])

    const usersData = {users, usersError, usersLoad, usersModal, setUsers, setUsersError, setUsersLoad, setUsersModal}

    return <UsersContext.Provider value={usersData}>{children}</UsersContext.Provider>
}