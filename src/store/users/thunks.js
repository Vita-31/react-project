import { getUsers } from "../../api/users"
import { setUsers, setUsersError, startFetching, stopFetching } from "./actionCreators"

export function getUsersThunk() {
    return (dispatch, getState) => {
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
    }
}