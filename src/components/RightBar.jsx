import React from 'react';
import AlgoSelector from './AlgoSelector.jsx';

const RightBar = () => {
  return (
    <div
      className='right-bar'
      style={{
        width: '20%',
        height: 'auto',
        borderStyle: 'solid',
        borderWdth: '2px'
      }}
    >
      right-bar
      <AlgoSelector />
    </div>
  );
};

export default RightBar;
