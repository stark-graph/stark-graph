import React from 'react';
import AlgoSelector from './AlgoSelector.jsx';

const RightBar = () => {
  return (
    <div className="right-bar" style={{ width: '20%', height: '100%', borderStyle: 'solid', borderSidth: '2px' }}>
      right-bar
      <AlgoSelector />
    </div>
  );
};

export default RightBar;
