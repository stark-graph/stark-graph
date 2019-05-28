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
      {`Tree ${treeIdx}`}
    </div>
  );
};

export default TreeTab;
