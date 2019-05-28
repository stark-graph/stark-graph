import * as types from './action-types';

export function changeActiveTree({ treeIdx }) {
  console.log('changing active tree: ', treeIdx, typeof treeIdx);
  return {
    type: types.CHANGE_ACTIVE_TREE,
    payload: treeIdx,
  };
}

export function addElement({ val }) {
  console.log('creating ADD_ELEMENT action');
  return {
    type: types.ADD_ELEMENT,
    payload: val,
  };
}
