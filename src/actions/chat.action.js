export const GET_CHAT = 'GET_CHAT';
export const SET_CHAT = 'SET_CHAT';
export const SET_USER = 'SET_USER';

export function getPropertyDetails() {
    return {
        type: GET_CHAT
    }
}

export function setChat(chat) {
    return {
        type: SET_CHAT,
        chat
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}
