import * as types from './action-types';

export function changeActiveTree({ treeIdx }) {
  return {
    type: types.CHANGE_ACTIVE_TREE,
    payload: treeIdx,
  };
}

export function addElement({ val }) {
  return {
    type: types.ADD_ELEMENT,
    payload: val,
  };
}
