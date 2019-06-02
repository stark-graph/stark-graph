import React from 'react';
import { connect } from 'react-redux';
import RightBar from '../components/RightBar.jsx';
import Graph from '../components/Graph.jsx';
import { addElement } from '../actions/active-actions.js';

const mapDispatchToProps = dispatch => ({
  addActiveArrElement: ({ val }) => {
    dispatch(addElement({ val }));
  },
});

const mapStateToProps = store => ({
  activeTree: store.activeState.activeTree,
  treesArr: store.activeState.treesArr,
});

const MainContainer = props => {
  const { activeTree, treesArr } = props;

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  };

  return (
    <div className="main-container" style={styles}>
      <Graph treesArr={treesArr} activeTree={activeTree} />
      <RightBar activeTree={activeTree} />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
