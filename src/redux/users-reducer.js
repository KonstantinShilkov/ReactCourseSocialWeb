import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USERS = "samurai-network/users/SET_USERS";
const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET_TOTAL_USERS_COUNT"
const TOGGLE_SET_IS_FETCHING = "samurai-network/users/TOGGLE_SET_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "samurai-network/users/TOGGLE_FOLLOWING_IN_PROGRESS"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
};

const usersReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:true} )
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:false} )
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u
                // }
                // )
            }
        case SET_USERS: {
            // return { ...state, users: [...state.users, ...action.users]}
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default: return state;
    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_SET_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (followingInProgress, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))

};

const followUnfollowFlow = async (dispatch, userId,apiMethod, actionCreator) => {

    dispatch(toggleFollowingInProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
followUnfollowFlow(dispatch, userId,usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId,usersAPI.unFollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer