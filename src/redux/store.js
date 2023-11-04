import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, my name is Kostay", likesCount: 18 },
                { id: 2, message: "It's my second Post", likesCount: 15 },
                { id: 3, message: "One more for test", likesCount: 11 }
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Sasha" },
                { id: 2, name: "Sergey" },
                { id: 3, name: "Andrey" },
                { id: 4, name: "Leha" },
                { id: 5, name: "Dyma" }
            ],

            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Davai" },
                { id: 3, message: "Where are you" },
                { id: 4, message: "Davai" }
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: "Sasha" },
                { id: 2, name: "Serega" },
                { id: 3, name: "Leha" }
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subScribe(observer) {
        this._callSubscriber = observer
    }, // observer

    dispatch(action) { // {type: "ADD POST"}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._state.news = newsReducer(this._state.news, action)
        this._state.music = musicReducer(this._state.music, action)

        this._callSubscriber(this._state)
    }
};

export default store
window.store = store;

//store OPP