import * as types from '../actions/action-types';

export function setActiveTree(activeTree) {
  return {
    type: types.SET_ACTIVE,
    payload: activeTree,
  };
}

export function addElement({ val }) {
  console.log('creating ADD_ELEMENT action');
  return {
    type: types.ADD_ELEMENT,
    payload: { val },
  };
}
