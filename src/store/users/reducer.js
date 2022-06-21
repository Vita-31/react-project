import { ADD_USER, DELETE_USER, SET_ERROR_USERS, SET_USERS, START_FETCHING_USERS, STOP_FETCHING_USERS } from "./actionTypes"

const initialState = {
    data: [],
    load: false,
    error: null
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state, data: [...state.data, action.payload]}
        case DELETE_USER: 
            return {...state, data: state.filter((user) => user.id !== action.payload)}
        case SET_USERS: 
            return {...state, data: action.payload}
        case START_FETCHING_USERS:
            return {...state, load: true, error: null}
        case STOP_FETCHING_USERS: 
            return {...state, load: false}
        case SET_ERROR_USERS: 
            return {...state, error: action.payload}
        default:
            return state
    }
}