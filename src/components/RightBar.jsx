import React from 'react';
import AlgoSelector from './AlgoSelector.jsx';

const RightBar = props => {
  const { algoName, activeTree } = props;
  return (
    <div
      className="right-bar"
      style={{
        width: '40%',
        height: 'auto',
      }}
    >
      <AlgoSelector algoName={algoName} activeTree={activeTree} />
    </div>
  );
};

export default RightBar;
