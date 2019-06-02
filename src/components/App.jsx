import { hot } from 'react-hot-loader/root';
import React from 'react';
import AppContainer from '../containers/AppContainer.jsx';

export const App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '95vh',
    }}
  >
    <AppContainer />
  </div>
);

export default hot(App);
