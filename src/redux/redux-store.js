import { combineReducers, legacy_createStore } from "redux";
import profileReducer from './profile-reducer'
import usersReducer from "./users-reducer";
import dialogsReducer from "./dialogs-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
let store = legacy_createStore(reducers);
window.store = store;


export default store