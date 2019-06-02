import { hot } from 'react-hot-loader/root';
import React from 'react';
import AppContainer from '../containers/AppContainer.jsx';

export const App = () => (
  <div className="app">
    <AppContainer />
  </div>
);

export default hot(App);
