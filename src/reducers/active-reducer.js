import * as types from '../actions/action-types';

// TODO: remove hardcoded root node; allow for root to be added by user
const initialState = {
  activeTree: 0,
  treesArr: [[10], [10]],
};

function addElement(state, val) {
  const { treesArr, activeTree } = state;

  const valNum = parseInt(val);

  // get the active tree array and add the new val to a copy
  const activeTreeArr = treesArr[activeTree];

  if (activeTreeArr.includes(valNum)) {
    return state;
  }

  const newActiveTreeArr = [...activeTreeArr, valNum];

  // copy the total trees arr and swap out the new version of the active treeArr
  const newTreesArr = treesArr.slice();
  newTreesArr[activeTree] = newActiveTreeArr;

  return { ...state, treesArr: newTreesArr };
}

function changeActiveTree(state, treeIdx) {
  return { ...state, activeTree: treeIdx };
}

const activeReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ELEMENT:
      return addElement(state, action.payload);
    case types.CHANGE_ACTIVE_TREE:
      return changeActiveTree(state, action.payload);
    default:
      return state;
  }
};

export default activeReducer;
