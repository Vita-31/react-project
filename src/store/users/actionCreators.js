import { SET_ERROR_USERS, SET_USERS, START_FETCHING_USERS, STOP_FETCHING_USERS } from "./actionTypes";


export function setUsers(users) {
    return {
        type: SET_USERS,
        payload: users
    } 
}

export function startFetching() {
    return {
        type: START_FETCHING_USERS
    } 
}

export function stopFetching() {
    return {
        type: STOP_FETCHING_USERS
    } 
}

export function setUsersError(error) {
    return {
        type: SET_ERROR_USERS,
        payload: error
    } 
}