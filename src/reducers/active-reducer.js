import * as types from '../actions/action-types';

const initialState = {
  algoName: '',
  activeTree: 0,
  treesArr: [[11, 16, 14, 15, 22, 12, 13, 100], [1, 2], [10]],
  treesObj: [{}, {}, {}],
};

const activeReducer = function(state = initialState, action) {
  console.log('active reducer called');
  switch (action.type) {
    case types.ADD_ELEMENT:
      return addElement(state, action.payload);
    case types.CHANGE_ACTIVE_TREE:
      return changeActiveTree(state, action.payload);
    default:
      return state;
  }
};

function addElement(state, val) {
  const { treesArr, activeTree } = state;

  const valNum = parseInt(val);

  // get the active tree array and add the new val to a copy
  const activeTreeArr = treesArr[activeTree];

  if (activeTreeArr.includes(valNum)) {
    console.log('returning old state');
    return state;
  }

  const newActiveTreeArr = [...activeTreeArr, valNum];

  // copy the total trees arr and swap out the new version of the active treeArr
  const newTreesArr = treesArr.slice();
  newTreesArr[activeTree] = newActiveTreeArr;

  return { ...state, treesArr: newTreesArr };
}

function changeActiveTree(state, treeIdx) {
  console.log('changing active tree to: ', treeIdx);
  return { ...state, activeTree: treeIdx };
}

export default activeReducer;
