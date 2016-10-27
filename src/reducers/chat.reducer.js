import * as actions from '../actions/chat.action';

const initialState = {
  chatHistory: [],
  user:null
};


const navigationReducer = function(state = initialState, action) {

  switch(action.type) {
    case actions.SET_CHAT:{
      return Object.assign({}, state, {chatHistory: [...state.chatHistory,action.chat]})
    }
    case actions.GET_CHAT:
      return Object.assign({}, state, {chatHistory: state.chatHistory})
    case actions.SET_USER:
      return Object.assign({}, state, {user: action.user})
    default:
      return state;
  }
};

export default navigationReducer;
