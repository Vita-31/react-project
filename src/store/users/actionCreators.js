import { END_LOAD_USERS, SET_USERS, SET_USERS_ERROR, START_LOAD_USERS } from "./actionTypes"

export function setUsers(users) {
    return {
        type: SET_USERS,
        payload: users
    }
}

export function startUsersLoad() {
    return {
        type: START_LOAD_USERS
    }
}

export function endUsersLoad() {
    return {
        type: END_LOAD_USERS
    }
}

export function setErrorUsers(error) {
    return {
        type: SET_USERS_ERROR,
        payload: error
    }
}