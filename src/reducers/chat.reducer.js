import * as actions from '../actions/chat.action';

const initialState = {
  chatHistory: []
};


const navigationReducer = function(state = initialState, action) {
  switch(action.type) {
    case actions.SET_CHAT:{
      return Object.assign({}, state, {chatHistory: [...state.chatHistory,action.chat]})
    }
    default:
      return state;
  }
};

export default navigationReducer;
