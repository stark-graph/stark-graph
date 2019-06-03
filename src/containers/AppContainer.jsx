import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar.jsx';
import MainContainer from './MainContainer.jsx';
import { changeActiveTree, addElement } from '../actions/active-actions.js';

const mapDispatchToProps = dispatch => ({
  changeIdxOfActiveTree: ({ treeIdx }) => {
    dispatch(changeActiveTree({ treeIdx }));
  },
  addActiveArrElement: ({ val }) => {
    dispatch(addElement({ val }));
  },
});

const mapStateToProps = store => ({
  activeTree: store.activeState.activeTree,
  treesArr: store.activeState.treesArr,
});

const AppContainer = props => {
  const {
    changeIdxOfActiveTree,
    treesArr,
    activeTree,
    addActiveArrElement,
  } = props;

  return (
    <div className="app-container">
      <NavBar
        addElement={addActiveArrElement}
        activeTree={activeTree}
        changeActiveTree={changeIdxOfActiveTree}
        treesArr={treesArr}
      />
      <MainContainer />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
