import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from './profile-reducer'
import usersReducer from "./users-reducer";
import dialogsReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as FormReducer } from "redux-form";
import appReducer from "./app-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: FormReducer,
    app: appReducer
});
let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;


export default store