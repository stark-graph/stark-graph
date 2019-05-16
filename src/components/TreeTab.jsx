import React from 'react';

// add onClick to change focusTree
const Graph = props => {
  return (
    <div className="treeTab" style={{ width: '20%', height: '100%', borderStyle: 'solid', borderSidth: '2px' }}>
      {`Tree ${props.treeId}`}
    </div>
  );
};

export default Graph;
