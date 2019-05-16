import { hot } from 'react-hot-loader/root';
import React from 'react';
import AppContainer from '../containers/AppContainer.jsx';

export const App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '98vw',
      height: '95vh',
      borderStyle: 'solid',
      borderWidth: '2px',
    }}
  >
    <header style={{ height: '40px', width: '100%', color: 'red' }}>
      <strong>Tree Visualizer</strong>
    </header>
    <AppContainer />
  </div>
);

export default hot(App);
