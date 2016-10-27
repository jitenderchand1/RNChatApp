import * as actions from '../actions/chat.action';

const initialState = {
  chatHistory: []
};


const navigationReducer = function(state = initialState, action) {
  switch(action.type) {
    case actions.SET_CHAT:{
      let data =[...state.chatHistory];
      data.push(action.chat);
      console.log('data', data);
      return Object.assign({}, state, {chatHistory: data})
    }
    case actions.GET_CHAT:
      return Object.assign({}, state, {chatHistory: state.chatHistory})
    default:
      return state;
  }
};

export default navigationReducer;
