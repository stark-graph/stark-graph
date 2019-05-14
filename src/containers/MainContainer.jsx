import React from 'react';
import RightBar from '../components/RightBar.jsx';
import Graph from '../components/Graph.jsx';

const MainContainer = () => {
  return (
    <div
      className="main-container"
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderSidth: '2px',
      }}
    >
      <Graph />
      <RightBar />
    </div>
  );
};

export default MainContainer;
