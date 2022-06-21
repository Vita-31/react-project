import { combineReducers, createStore } from "redux";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
    users: usersReducer
})

export const store = createStore(rootReducer)