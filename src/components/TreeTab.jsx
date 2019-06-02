import React from 'react';

// add onClick to change focusTree
const TreeTab = props => {
  const { changeActiveTree, treeIdx } = props;
  return (
    <button
      className="btn tree-tab"
      onClick={() => changeActiveTree({ treeIdx })}
    >
      {treeIdx < 1 ? `Binary Search Tree` : `Max Heap`}
    </button>
  );
};

export default TreeTab;
