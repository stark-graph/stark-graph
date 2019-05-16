import * as types from '../actions/action-types';

const initialState = {
  algoName: ''
}

const algoReducer = function(state = initialState, action) {
  switch(action.type){
    case types.SET_ALGOS:
      return {...state, ...{ algoName: action.payload} }
    default:
      return state
  }
}

export default algoReducer;