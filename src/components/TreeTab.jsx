import React from 'react';

const treeNames = ['BST-1', 'BST-2', 'Heap'];

const TreeTab = props => {
  const { changeActiveTree, treeIdx } = props;
  return (
    <div
      className="treeTab"
      onClick={() => changeActiveTree({ treeIdx })}
      style={{ width: '20%', height: '100%', borderStyle: 'solid', borderWidth: '2px' }}
    >
      {`${treeNames[treeIdx]}`}
    </div>
  );
};

export default TreeTab;
