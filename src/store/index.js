
import { combineReducers, createStore } from "redux";
import { usersReducer } from "./users/userReducer";

const rootReducer = combineReducers({
    users: usersReducer
})

export const store = createStore(rootReducer);