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
  // algoName: store.algoState.algoName,
  treesArr: store.activeState.treesArr,
});

const MainContainer = props => {
  const { activeTree, treesArr, algoName, addActiveArrElement } = props;
  return (
    <div
      className="main-container"
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
      }}
    >
      <LeftBar addElement={addActiveArrElement} />
      <Graph treesArr={treesArr} activeTree={activeTree} />
      <RightBar algoName={algoName} />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
