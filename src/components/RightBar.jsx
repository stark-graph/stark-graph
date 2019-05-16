import React from 'react';
import AlgoSelector from './AlgoSelector.jsx';

const RightBar = () => {
  return (
    <div
      className='right-bar'
      style={{
        width: '20%',
        height: 'auto'
      }}
    >
      <AlgoSelector />
    </div>
  );
};

export default RightBar;
