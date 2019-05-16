import * as types from '../actions/action-types';

export function setActiveNode(activeNode){
  return {
    type: types.SET_ACTIVE,
    activeNode
  };
}