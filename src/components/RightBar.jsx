import React from 'react';
import CodeContainer from './CodeContainer.jsx';

const RightBar = props => {
  const { activeTree } = props;
  return (
    <div className="right-bar col-3">
      <CodeContainer activeTree={activeTree} />
    </div>
  );
};

export default RightBar;
