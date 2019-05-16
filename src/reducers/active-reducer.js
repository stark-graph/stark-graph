import * as types from '../actions/action-types';

const initialState = {
  algoName: '',
  activeTree: 0,
  treesArr: [[11, 16, 14, 15, 22, 12, 13, 100], [1, 2], []],
  treesObj: [{}, {}, {}],
};

const activeReducer = function(state = initialState, action) {
  console.log('active reducer called');
  switch (action.type) {
    case types.ADD_ELEMENT:
      return addElement(state, action.payload);
    default:
      return state;
  }
};

function addElement(state, { val }) {
  const { treesArr, activeTree } = state;

  const valNum = parseInt(val);

  // get the active tree array and add the new val to a copy
  const activeTreeArr = treesArr[activeTree];
  console.log('old active tree arr: ', activeTreeArr);
  const newActiveTreeArr = [...activeTreeArr, valNum];
  console.log('new active tree arr: ', newActiveTreeArr);

  // copy the total trees arr and swap out the new version of the active treeArr
  const newTreesArr = treesArr.slice();
  newTreesArr[activeTree] = newActiveTreeArr;

  return { ...state, treesArr: newTreesArr };
}

export default activeReducer;
