import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "samurai-network/profile/ADD_POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE"
const SET_USER_STATUS = "samurai-network/profile/SET_USER_STATUS"
const DELETE_POST = "samurai-network/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "samurai-network/profile/SAVE_PHOTO_SUCCESS"


const initialState = {
    posts: [
        { id: 1, message: "Hi, my name is Kostay", likesCount: 18 },
        { id: 2, message: "It's my second Post", likesCount: 15 },
        { id: 3, message: "One more for test", likesCount: 11 }
    ],
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 4, message: action.post, likesCount: 0 }],
            }
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SET_USER_STATUS: {
            return { ...state, status: action.status }

        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
            }
        }


        default: return state
    }
}

export const addPost = (post) => ({ type: ADD_POST, post })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })



export const getProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))
}

export const getProfileStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfileStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const putProfileStatus = (updateStatus) => async (dispatch) => {
    try {
    const response = await profileAPI.putProfileStatus(updateStatus)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(updateStatus))
    } 

} catch(error) {
    // управляем ошибками , диалоговое сообщение, диспатчим номер ошибки и так далее
}

}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.putProfileAvatar(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages : "Unidentify Error"
        dispatch(stopSubmit("edit-profile", { _error: message }))
        return Promise.reject(message[0])
    }
}


export default profileReducer

// { "contacts": {"facebook":message }})
// parse запарсить нужно чтобы кажддая ячейка давала нужную ошибку