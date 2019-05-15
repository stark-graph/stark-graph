import * as types from '../actions/action-types';

const initialState = {
  input: ''
}

const inputReducer = function(state = initialState, action) {
  switch(action.type){
    case types.SET_INPUT:
      return {...state, ...{ input: action.payload} }
    default:
      return state
  }
}

export default inputReducer;