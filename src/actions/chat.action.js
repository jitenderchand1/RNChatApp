export const GET_CHAT = 'GET_CHAT';
export const SET_CHAT = 'SET_CHAT';

export function getPropertyDetails() {
    return {
        type: SET_CHAT
    }
}

export function setPropertyDetail(chat) {
    return {
        type: GET_CHAT,
        chat
    }
}
