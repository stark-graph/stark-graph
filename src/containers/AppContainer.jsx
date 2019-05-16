import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import MainContainer from './MainContainer.jsx';
import { changeActiveTree } from '../actions/active-actions.js';
import { connect } from 'react-redux';

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
        borderStyle: 'solid',
        borderWidth: '2px',
      }}
    >
      <HeaderBar changeActiveTree={changeIdxOfActiveTree} treesArr={treesArr} />
      <MainContainer />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
