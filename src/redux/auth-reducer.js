import { stopSubmit } from "redux-form";
import { authMeAPI } from "../api/api";

const SET_AUTH_USER_DATA = "samurai-network/auth/SET_AUTH_USER_DATA";
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default: return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authMeAPI.getAuth()

    if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authMeAPI.LogIn(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages : "Unidentify Error"
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authMeAPI.LogOut()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer

