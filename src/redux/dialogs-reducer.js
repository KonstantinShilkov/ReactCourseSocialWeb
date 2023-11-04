const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
           return {
                ...state,
                messages: [...state.messages, { id: 5, message: state.newMessageText }],
                newMessageText: ''
            };
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };

        default: return state
    }
}

export const addMessageActionCreater = () => ({ type: SEND_MESSAGE });
export const onMessageChangeActionCreater = (messageText) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: messageText
})

export default dialogsReducer
