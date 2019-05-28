import React from 'react';
import { connect } from 'react-redux';
import HeaderBar from './HeaderBar.jsx';
import MainContainer from './MainContainer.jsx';
import { changeActiveTree } from '../actions/active-actions.js';

const mapDispatchToProps = dispatch => ({
  changeIdxOfActiveTree: ({ treeIdx }) => {
    dispatch(changeActiveTree({ treeIdx }));
  },
});

const mapStateToProps = store => ({
  activeTree: store.activeState.activeTree,
  treesArr: store.activeState.treesArr,
});

const AppContainer = props => {
  const { changeIdxOfActiveTree, treesArr } = props;

  return (
    <div
      className="app-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <HeaderBar changeActiveTree={changeIdxOfActiveTree} treesArr={treesArr} />
      <MainContainer />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
