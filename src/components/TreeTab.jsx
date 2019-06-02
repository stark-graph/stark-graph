import React from 'react';

const TreeTab = props => {
  const { changeActiveTree, treeIdx } = props;
  return (
    <button
      type="button"
      className="btn tree-tab"
      onClick={() => changeActiveTree({ treeIdx })}
    >
      {treeIdx < 1 ? `Binary Search Tree` : `Max Heap`}
    </button>
  );
};

export default TreeTab;
