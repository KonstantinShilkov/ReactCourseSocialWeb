const SEND_MESSAGE = "SEND-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: action.newMessageBody }],
            };

        default: return state
    }
}

export const sendNewMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer 
