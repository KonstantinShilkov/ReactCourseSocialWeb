import { profileAPI } from "../api/api";

const ADD_POST = "samurai-network/profile/ADD_POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE"
const SET_USER_STATUS = "samurai-network/profile/SET_USER_STATUS"
const DELETE_POST = "samurai-network/profile/DELETE_POST";


let initialState = {
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
            return {...state, status: action.status }
            
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p=> p.id!= action.postId)
            }
        }


        default: return state
    }
}

export const addPost = (post) => ({ type: ADD_POST, post })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })


export const getProfile = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfile(userId)

                dispatch(setUserProfile(response.data))
    }

export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileStatus(userId)
                dispatch(setUserStatus(response.data))
    }

export const putProfileStatus= (updateStatus) => async (dispatch) => {
      let response = await profileAPI.putProfileStatus(updateStatus)
                if (response.data.resultCode === 0){
                dispatch(setUserStatus(updateStatus))
            }
}

export default profileReducer