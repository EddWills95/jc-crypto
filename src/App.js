import React, { Component } from 'react';
import './App.scss';
import SelectedCoins from './containers/SelectedCoins/SelectedCoins';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectedCoins />
      </div>
    );
  }
}

export default App;
