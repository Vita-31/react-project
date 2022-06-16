import { ADD_USERS, REMOVE_USER, SET_USERS, START_LOAD_USERS, END_LOAD_USERS, SET_USERS_ERROR } from "./actionTypes";

const initialState = {
    users: [],
    error: null,
    loading: false
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_USERS:
            return {
                ...state, 
                loading: true, error: null
            }
        case END_LOAD_USERS:
            return {
                ...state, 
                loading: false
            }
        case SET_USERS_ERROR:
            return {
                ...state, 
                error: action.payload
            }
        case ADD_USERS:
            return {
                ...state, 
                data: [...state.data, action.payload]
            }
        case REMOVE_USER: 
            return {
                ...state,
                data: state.filter(user => user.id !== action.payload)
            }
        case SET_USERS: 
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}