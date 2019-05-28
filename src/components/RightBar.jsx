import React from 'react';
import AlgoSelector from './AlgoSelector.jsx';

const RightBar = () => (
  <div
    className="right-bar"
    style={{
      width: '40%',
      height: 'auto',
    }}
  >
    <AlgoSelector />
  </div>
);

export default RightBar;
