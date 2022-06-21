import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
    users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))