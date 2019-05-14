import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import MainContainer from './MainContainer.jsx';

const AppContainer = () => {
  return (
    <div
      className="app-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderSidth: '2px',
      }}
    >
      <HeaderBar />
      <MainContainer />
    </div>
  );
};

export default AppContainer;
