import React from 'react';
import { connect } from 'react-redux';
import RightBar from '../components/RightBar.jsx';
import Graph from '../components/Graph.jsx';
import LeftBar from '../components/LeftBar.jsx';
import { addElement } from '../actions/active-actions.js';

const mapDispatchToProps = dispatch => ({
  addActiveArrElement: ({ val }) => {
    dispatch(addElement({ val }));
  },
});

const mapStateToProps = store => ({
  activeTree: store.activeState.activeTree,
  treesArr: store.activeState.treesArr,
  treesObj: store.activeState.treesObj,
});

const MainContainer = props => {
  const { activeTree, treesArr, treesObj, addActiveArrElement } = props;

  return (
    <div
      className="main-container"
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
      }}
    >
      {/* <LeftBar addElement={addActiveArrElement} /> */}
      <Graph treesArr={treesArr} treesObj={treesObj} activeTree={activeTree} />
      <RightBar activeTree={activeTree} />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
