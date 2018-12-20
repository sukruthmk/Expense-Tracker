import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Expenses from './components/Expenses';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Expenses/>
      </div>
    );
  }
}

export default App;
