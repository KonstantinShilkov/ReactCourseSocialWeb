import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        { id: 1, message: "Hi, my name is Kostay", likesCount: 18 },
        { id: 2, message: "It's my second Post", likesCount: 15 },
        { id: 3, message: "One more for test", likesCount: 11 }
    ],
    profile: null,
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 4, message: state.newPostText, likesCount: 0 }],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        default: return state
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const onPostChangeActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfile = (userId) => {
    return (dispatch) => {

        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export default profileReducer