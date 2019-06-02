import React from 'react';

// add onClick to change focusTree
const TreeTab = props => {
  const { changeActiveTree, treeIdx } = props;
  return (
    <div
      className="treeTab"
      onClick={() => changeActiveTree({ treeIdx })}
      style={{
        width: '20%',
        height: '100%',
      }}
    >
      {treeIdx <= 1 ? `Binary Search Tree` : `Max Heap`}
    </div>
  );
};

export default TreeTab;
