const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hi, my name is Kostay", likesCount: 18 },
        { id: 2, message: "It's my second Post", likesCount: 15 },
        { id: 3, message: "One more for test", likesCount: 11 }
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return { 
                ...state,
                posts: [...state.posts, { id: 4, message: state.newPostText, likesCount: 0}],
                newPostText : ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newPostText
             }
        }
        default: return state
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const onPostChangeActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
})


export default profileReducer